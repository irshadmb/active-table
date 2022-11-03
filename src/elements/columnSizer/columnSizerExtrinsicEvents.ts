import {UpdateRowElement} from '../../utils/insertRemoveStructure/update/updateRowElement';
import {ColumnSizerT, SelectedColumnSizerT} from '../../types/columnSizer';
import {TableElementEventState} from '../../types/tableElementEventState';
import {EditableTableComponent} from '../../editable-table-component';
import {MovableColumnSizerElement} from './movableColumnSizerElement';
import {ColumnSizerGenericUtils} from './columnSizerGenericUtils';
import {TableDimensions} from '../../types/tableDimensions';
import {SEMI_TRANSPARENT_COLOR} from '../../consts/colors';
import {ColumnsDetailsT} from '../../types/columnDetails';
import {ColumnSizerSetWidth} from './columnSizerSetWidth';
import {ColumnSizerElement} from './columnSizerElement';

export class ColumnSizerExtrinsicEvents {
  private static moveMovableElement(selectedColumnSizer: HTMLElement, columnsDetails: ColumnsDetailsT, newLeft: number) {
    const {columnSizer} = ColumnSizerGenericUtils.getSizerDetailsViaElementId(selectedColumnSizer.id, columnsDetails);
    columnSizer.movableElement.style.left = `${newLeft}px`;
  }

  // prettier-ignore
  public static windowMouseMove(etc: EditableTableComponent, newXMovement: number) {
    const {tableElementEventState: {selectedColumnSizer}, columnsDetails} = etc;
    if (selectedColumnSizer) {
      const {moveLimits, element} = selectedColumnSizer;
      selectedColumnSizer.mouseMoveOffset += newXMovement;
      if (selectedColumnSizer.mouseMoveOffset >= moveLimits.left
          && selectedColumnSizer.mouseMoveOffset <= moveLimits.right) {
        ColumnSizerExtrinsicEvents.moveMovableElement(element, columnsDetails, selectedColumnSizer.mouseMoveOffset);
      }
    }
  }

  // WORK - once right column is not resizable rightHeader won't have to be optional
  // prettier-ignore
  public static setWidth(selectedColumnSizer: SelectedColumnSizerT, tableDimensions: TableDimensions,
      leftHeader: HTMLElement, rightHeader?: HTMLElement) {
    ColumnSizerElement.unsetTransitionTime(selectedColumnSizer.element);
    ColumnSizerSetWidth.set(selectedColumnSizer, tableDimensions, leftHeader, rightHeader);
    // header cell size can increase or decrease as the width is changed
    setTimeout(() => UpdateRowElement.updateHeaderHeight(leftHeader.parentElement as HTMLElement));
  }

  // WORK - right cell should not be resizable
  // prettier-ignore
  private static mouseUp(tableElementEventState: TableElementEventState, columnsDetails: ColumnsDetailsT,
      tableDimensions: TableDimensions) {
    const selectedColumnSizer = tableElementEventState.selectedColumnSizer as SelectedColumnSizerT;
    const {columnSizer, headerCell, sizerNumber} = ColumnSizerGenericUtils.getSizerDetailsViaElementId(
      selectedColumnSizer.element.id, columnsDetails);
    ColumnSizerExtrinsicEvents.setWidth(selectedColumnSizer, tableDimensions,headerCell,
      columnsDetails[sizerNumber + 1]?.elements[0]);
    MovableColumnSizerElement.hide(columnSizer.movableElement);
  }

  private static setSizerStyleToHoverNoAnimation(columnSizer: ColumnSizerT, anotherColor?: string) {
    const {width} = columnSizer.styles.hover;
    ColumnSizerElement.setHoverStyle(columnSizer.element, width, false, anotherColor);
    ColumnSizerElement.unsetBackgroundImage(columnSizer.element);
  }

  private static mouseUpNotOnSizer(columnSizer: ColumnSizerT) {
    // ColumnSizerElement.hide(selectedColumnSizer as HTMLElement);
    const {element: sizerElement, styles: sizerStyles, movableElement} = columnSizer;
    ColumnSizerExtrinsicEvents.setSizerStyleToHoverNoAnimation(columnSizer, movableElement.style.backgroundColor);
    // this kicks off the animation with the hover properties from above
    setTimeout(() => {
      ColumnSizerElement.setTransitionTime(sizerElement);
      ColumnSizerElement.unsetElementsToDefault(sizerElement, sizerStyles.default.width, false);
      ColumnSizerElement.hideWhenCellNotHovered(columnSizer, true);
    });
    // reset properties after the animation so we have the right properties for mouse enter
    setTimeout(() => {
      ColumnSizerElement.setBackgroundImage(sizerElement, sizerStyles.default.backgroundImage);
      ColumnSizerElement.setColors(sizerElement, SEMI_TRANSPARENT_COLOR);
    }, ColumnSizerElement.TRANSITION_TIME_ML);
  }

  // if the user clicks mouse up on the table first - this will not be activated as columnSizer selected will be removed
  // prettier-ignore
  public static windowMouseUp(etc: EditableTableComponent) {
    const {tableElementEventState, columnsDetails, tableDimensions} = etc;
    const {columnSizer} = ColumnSizerGenericUtils.getSizerDetailsViaElementId(
      (tableElementEventState.selectedColumnSizer as SelectedColumnSizerT).element.id, columnsDetails);
    ColumnSizerExtrinsicEvents.mouseUp(tableElementEventState, columnsDetails, tableDimensions);
    ColumnSizerExtrinsicEvents.mouseUpNotOnSizer(columnSizer);
    delete tableElementEventState.selectedColumnSizer;
  }

  private static mouseUpOnSizer(columnSizer: ColumnSizerT) {
    ColumnSizerExtrinsicEvents.setSizerStyleToHoverNoAnimation(columnSizer);
    columnSizer.isMouseUpOnSizer = true;
    setTimeout(() => {
      columnSizer.isMouseUpOnSizer = false;
      ColumnSizerElement.setTransitionTime(columnSizer.element);
    });
  }

  // this method is used to get what exact element was clicked on as window events just returns the component as the target
  // prettier-ignore
  public static tableMouseUp(etc: EditableTableComponent, target: HTMLElement) {
    const {tableElementEventState, columnsDetails, tableDimensions} = etc;
    const selectedColumnSizer = tableElementEventState.selectedColumnSizer as SelectedColumnSizerT;
    const {columnSizer} = ColumnSizerGenericUtils.getSizerDetailsViaElementId(
      selectedColumnSizer.element.id, columnsDetails);
    ColumnSizerExtrinsicEvents.mouseUp(tableElementEventState, columnsDetails, tableDimensions);
    // when autorise happens - the sizer usually moves out of the cursor area
    if (MovableColumnSizerElement.isMovableColumnSizer(target) && !selectedColumnSizer.wasAutoresized) {
      ColumnSizerExtrinsicEvents.mouseUpOnSizer(columnSizer);
    } else {
      ColumnSizerExtrinsicEvents.mouseUpNotOnSizer(columnSizer);
    }
    delete tableElementEventState.selectedColumnSizer;
  }
}