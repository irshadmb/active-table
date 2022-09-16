import {EditableTableComponent} from '../../../editable-table-component';
import {CELL_UPDATE_TYPE} from '../../../enums/onUpdateCellType';
import {UpdateCellsForRows} from '../update/updateCellsForRows';

export class RemoveRow {
  private static update(etc: EditableTableComponent, rowIndex: number, lastRowElement: HTMLElement, lastRowIndex: number) {
    const lastRow = {element: lastRowElement, index: lastRowIndex};
    UpdateCellsForRows.rebindAndFireUpdates(etc, rowIndex, CELL_UPDATE_TYPE.REMOVED, lastRow);
    etc.onTableUpdate(etc.contents);
  }

  private static removeRow(etc: EditableTableComponent, rowIndex: number) {
    etc.tableBodyElementRef?.removeChild(etc.tableBodyElementRef.children[rowIndex]);
    etc.contents.splice(rowIndex, 1);
  }

  public static remove(etc: EditableTableComponent, rowIndex: number) {
    const lastRowIndex = etc.contents.length - 1;
    const lastRowElement = etc.tableBodyElementRef?.children[lastRowIndex] as HTMLElement;
    RemoveRow.removeRow(etc, rowIndex);
    setTimeout(() => RemoveRow.update(etc, rowIndex, lastRowElement, lastRowIndex));
  }
}
