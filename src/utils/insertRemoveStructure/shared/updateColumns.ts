import {EditableTableComponent} from '../../../editable-table-component';
import {CELL_UPDATE_TYPE} from '../../../enums/onUpdateCellType';
import {CellElement} from '../../../elements/cell/cellElement';
import {ElementDetails} from '../../../types/elementDetails';

export class UpdateColumns {
  // prettier-ignore
  private static updateLastColumn(etc: EditableTableComponent,
    rowIndex: number, cellElement: Node, columnIndex: number, cellUpdateType: CELL_UPDATE_TYPE) {
    if (cellUpdateType !== CELL_UPDATE_TYPE.REMOVED) {
      CellElement.setCellEvents(etc, cellElement as HTMLElement, rowIndex, columnIndex);
    }
    etc.onCellUpdate(cellElement.textContent as string, rowIndex, columnIndex, cellUpdateType);
  }

  // prettier-ignore
  private static updateNextBeforeLastColumns(
      etc: EditableTableComponent, row: ElementDetails, startColumnIndex: number, lastColumnIndex: number) {
    const nextColumns = Array.from(row.element.children).slice(startColumnIndex, lastColumnIndex);
    nextColumns.forEach((cellElement: Node, columnIndex: number) => {
      const relativeColumnIndex = columnIndex + startColumnIndex;
      UpdateColumns.updateLastColumn(etc, row.index, cellElement, relativeColumnIndex, CELL_UPDATE_TYPE.UPDATE)
    });
  }

  // the reason why last column details need to be passed here is because after removal of last element, its details are
  // no longer present here as this class's methods are run in setTimeouts, hence those details need to be captured
  // before these methods are executed
  // prettier-ignore
  public static update(etc: EditableTableComponent, 
      row: ElementDetails, startingColumnIndex: number, cellUpdateType: CELL_UPDATE_TYPE, lastColumn: ElementDetails) {
    UpdateColumns.updateNextBeforeLastColumns(etc, row, startingColumnIndex, lastColumn.index);
    UpdateColumns.updateLastColumn(etc, row.index, lastColumn.element, lastColumn.index, cellUpdateType);
  }
}