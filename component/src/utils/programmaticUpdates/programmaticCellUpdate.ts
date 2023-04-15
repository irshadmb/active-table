import {ColumnDropdown} from '../../elements/dropdown/columnDropdown/columnDropdown';
import {ProgrammaticCellUpdateT} from '../../types/programmaticCellUpdateT';
import {ColumnSettingsUtils} from '../columnSettings/columnSettingsUtils';
import {ColumnTypesUtils} from '../columnType/columnTypesUtils';
import {CellElement} from '../../elements/cell/cellElement';
import {CellEvents} from '../../elements/cell/cellEvents';
import {Dropdown} from '../../elements/dropdown/dropdown';
import {ObjectUtils} from '../object/objectUtils';
import {ActiveTable} from '../../activeTable';

export class ProgrammaticCellUpdate {
  public static updateText(at: ActiveTable, programmaticCellUpdate: ProgrammaticCellUpdateT) {
    const {newText, rowIndex, columnIndex} = programmaticCellUpdate;
    if (!ObjectUtils.areValuesFullyDefined(newText, rowIndex, columnIndex)) return;
    if (typeof newText !== 'string' && typeof newText !== 'number') return;
    const element = at._columnsDetails[columnIndex]?.elements[rowIndex];
    if (!element || newText === CellElement.getText(element)) return;
    CellEvents.updateCell(at, newText, rowIndex, columnIndex, {element, processText: rowIndex > 0});
    ColumnTypesUtils.updateRelatedElements(at, rowIndex, columnIndex, element);
    if (rowIndex === 0) {
      if (Dropdown.isDisplayed(at._activeOverlayElements.columnDropdown)) ColumnDropdown.processTextAndHide(at);
      ColumnSettingsUtils.changeColumnSettingsIfNameDifferent(at, element, columnIndex);
    }
  }
}