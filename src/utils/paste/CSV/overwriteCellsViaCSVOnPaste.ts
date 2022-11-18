import {CategoryCellElement} from '../../../elements/cell/cellsWithTextDiv/categoryCell/categoryCellElement';
import {DateCellInputElement} from '../../../elements/cell/cellsWithTextDiv/dateCell/dateCellInputElement';
import {DATE_COLUMN_TYPE, TEXT_DIV_COLUMN_TYPE, USER_SET_COLUMN_TYPE} from '../../../enums/columnType';
import {CategoryDropdownItem} from '../../../elements/dropdown/categoryDropdown/categoryDropdownItem';
import {InsertNewColumn} from '../../insertRemoveStructure/insert/insertNewColumn';
import {InsertNewRow} from '../../insertRemoveStructure/insert/insertNewRow';
import {EditableTableComponent} from '../../../editable-table-component';
import {CellTypeTotalsUtils} from '../../cellType/cellTypeTotalsUtils';
import {DataUtils} from '../../insertRemoveStructure/shared/dataUtils';
import {TableRow, TableCellText} from '../../../types/tableContents';
import {CaretPosition} from '../../focusedElements/caretPosition';
import {CellElementIndex} from '../../elements/cellElementIndex';
import {ParseCSVClipboardText} from './parseCSVClipboardText';
import {CellEvents} from '../../../elements/cell/cellEvents';
import {ArrayUtils} from '../../array/arrayUtils';
import {CSVRow, CSV} from '../../../types/CSV';
import {Browser} from '../../browser/browser';

export class OverwriteCellsViaCSVOnPaste {
  // if the data array does not fill the full structure, fill cells with the default value
  // prettier-ignore
  private static createDataArrayWithDefaultCells(
      arrayLength: number, defaultValue: string, data: CSVRow, dataStartIndex: number) {
    const newRowData = DataUtils.createDataArray(arrayLength, defaultValue);
    newRowData.splice(dataStartIndex, data.length, ...data);
    return newRowData;
  }

  // prettier-ignore
  private static createNewRows(etc: EditableTableComponent, dataForNewRows: CSV, startColumnIndex: number) {
    dataForNewRows.forEach((rowData: CSVRow) => {
      const newRowData = OverwriteCellsViaCSVOnPaste.createDataArrayWithDefaultCells(
        etc.contents[0].length, etc.defaultCellValue, rowData, startColumnIndex);
      InsertNewRow.insert(etc, etc.contents.length, true, newRowData);
    });
  }

  // prettier-ignore
  private static createNewColumns(etc: EditableTableComponent, dataForNewColumnsByRow: CSV, startRowIndex: number) {
    const dataForNewColumnsByColumn = ArrayUtils.transpose(dataForNewColumnsByRow);
    dataForNewColumnsByColumn.forEach((columnData: CSVRow) => {
      const newColumnData = OverwriteCellsViaCSVOnPaste.createDataArrayWithDefaultCells(
        etc.contents.length, etc.defaultCellValue, columnData, startRowIndex);
      InsertNewColumn.insert(etc, etc.contents[0].length, newColumnData);
    });
  }

  // prettier-ignore
  private static overwriteCell(etc: EditableTableComponent,
      rowElement: HTMLElement, rowIndex: number, columnIndex: number, newCellText: string) {
    const elementIndex = CellElementIndex.getViaColumnIndex(columnIndex, etc.displayIndexColumn);
    const cellElement = rowElement.children[elementIndex] as HTMLElement;
    const oldType = CellTypeTotalsUtils.parseType(cellElement.textContent as string, etc.defaultCellValue);
    const processedNewCellText = CellEvents.updateCell(
      etc, newCellText, rowIndex, columnIndex, { element: cellElement, updateTableEvent: false });
    const columnDetails = etc.columnsDetails[columnIndex];
    if (columnDetails.userSetColumnType === USER_SET_COLUMN_TYPE.Category) {
      CategoryCellElement.finaliseEditedText(etc, cellElement.children[0] as HTMLElement, columnIndex, true);
    } else if (DATE_COLUMN_TYPE[columnDetails.userSetColumnType] && Browser.IS_INPUT_DATE_SUPPORTED) {
      DateCellInputElement.updateInputBasedOnTextDiv(columnDetails.userSetColumnType, cellElement);
    }
    setTimeout(() => {
      // CAUTION-2
      const newType = CellTypeTotalsUtils.parseType(processedNewCellText, etc.defaultCellValue);
      CellTypeTotalsUtils.changeCellTypeAndSetNewColumnType(columnDetails, oldType, newType);
    });
  }

  // prettier-ignore
  private static overwriteRowData(etc: EditableTableComponent,
      row: TableRow, rowIndex: number, columnIndex: number, rowElement: HTMLElement) {
    row.forEach((cellText: TableCellText, CSVColumnIndex: number) => {
      const relativeColumnIndex = columnIndex + CSVColumnIndex;
      OverwriteCellsViaCSVOnPaste.overwriteCell(etc, rowElement, rowIndex, relativeColumnIndex, cellText as string);
    });
  }

  // prettier-ignore
  private static setCaretToEndAndHighlightIfCategory(etc: EditableTableComponent, cellElement: HTMLElement,
      columnIndex: number) {
    const {userSetColumnType, categoryDropdown: dropdown} = etc.columnsDetails[columnIndex];
    if (TEXT_DIV_COLUMN_TYPE[userSetColumnType]) {
      const textElement = cellElement.children[0] as HTMLElement;
      CaretPosition.setToEndOfText(etc, textElement);
      if (userSetColumnType === USER_SET_COLUMN_TYPE.Category) {
        CategoryDropdownItem.attemptHighlightMatchingCellCategoryItem(textElement, dropdown, etc.defaultCellValue, true);
      }
    } else {
      CaretPosition.setToEndOfText(etc, cellElement);
    }
  }

  // prettier-ignore
  private static processFocusedCell(etc: EditableTableComponent, columnIndex: number) {
    const cellElement = etc.focusedElements.cell.element as HTMLElement;
    const text = cellElement.textContent as string;
    etc.focusedElements.cell.type = CellTypeTotalsUtils.parseType(text, etc.defaultCellValue);
    OverwriteCellsViaCSVOnPaste.setCaretToEndAndHighlightIfCategory(etc, cellElement, columnIndex);
  }

  // prettier-ignore
  private static overwriteExistingCells(
      etc: EditableTableComponent, dataToOverwriteRows: CSV, startRowIndex: number, startColumnIndex: number) {
    const dataForNewColumns: CSV = [];
    dataToOverwriteRows.forEach((dataToOverwriteRow: CSVRow, CSVRowIndex: number) => {
      const relativeRowIndex = startRowIndex + CSVRowIndex;
      const rowElement = etc.tableBodyElementRef?.children[relativeRowIndex] as HTMLElement;
      const numberOfCellsToOverwrite = etc.contents[0].length - startColumnIndex;
      const overwriteData = dataToOverwriteRow.slice(0, numberOfCellsToOverwrite);
      OverwriteCellsViaCSVOnPaste.overwriteRowData(etc, overwriteData, relativeRowIndex, startColumnIndex, rowElement);
      const overflowData = dataToOverwriteRow.slice(numberOfCellsToOverwrite);
      dataForNewColumns.push(overflowData);
    });
    setTimeout(() => OverwriteCellsViaCSVOnPaste.processFocusedCell(etc, startColumnIndex));
    return dataForNewColumns;
  }

  // prettier-ignore
  private static overwriteCellsTextUsingCSV(
      etc: EditableTableComponent, CSV: CSV, startRowIndex: number, startColumnIndex: number) {
    const numberOfRowsToOverwrite = etc.contents.length - startRowIndex;
    const dataToOverwriteRows = CSV.slice(0, numberOfRowsToOverwrite);
    // the reason why new columns are not created when the existing cells are overwritten is because the creation of new
    // columns allows new column data to be defined - which is gathered after traversing all dataToOverwriteRows
    const dataForNewColumnsByRow = OverwriteCellsViaCSVOnPaste.overwriteExistingCells(
      etc, dataToOverwriteRows, startRowIndex, startColumnIndex);
    OverwriteCellsViaCSVOnPaste.createNewColumns(etc, dataForNewColumnsByRow, startRowIndex);
    const dataForNewRows = CSV.slice(numberOfRowsToOverwrite);
    OverwriteCellsViaCSVOnPaste.createNewRows(etc, dataForNewRows, startColumnIndex);
    etc.onTableUpdate(etc.contents);
  }

  // prettier-ignore
  public static overwrite(etc: EditableTableComponent,
      clipboardText: string, event: ClipboardEvent, rowIndex: number, columnIndex: number,) {
    event.preventDefault();
    const CSV = ParseCSVClipboardText.parse(clipboardText);
    OverwriteCellsViaCSVOnPaste.overwriteCellsTextUsingCSV(etc, CSV, rowIndex, columnIndex);
  }

  public static isCSVData(clipboardText: string): boolean {
    return (
      clipboardText.indexOf(ParseCSVClipboardText.NEW_LINE_SYMBOL) > -1 ||
      clipboardText.indexOf(ParseCSVClipboardText.TAB_SYMBOL) > -1
    );
  }
}
