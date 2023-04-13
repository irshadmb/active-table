import {RowsPerPageSelectButtonElement} from './rowsPerPageSelectButtonElement';
import {PaginationInternal} from '../../../../types/paginationInternal';
import {RowsPerPageDropdown} from '../dropdown/rowsPerPageDropdown';
import {PaginationStyle} from '../../../../types/pagination';
import {StatefulCSS} from '../../../../types/cssStyle';
import {ActiveTable} from '../../../../activeTable';
import {Dropdown} from '../../../dropdown/dropdown';

export class RowsPerPageSelectButtonEvents {
  // prettier-ignore
  private static buttonClick(this: ActiveTable, event: MouseEvent) {
    const dropdownElement = this._pagination.rowsPerPageDropdown as HTMLElement;
    if (Dropdown.isDisplayed(dropdownElement)) {
      Dropdown.hide(dropdownElement);
    } else {
      const buttonElement = event.target as HTMLElement;
      RowsPerPageDropdown.display(buttonElement, dropdownElement,
        this._pagination.dropdownWidth, this._tableDimensions.border);
    }
  }

  private static buttonMouseDown(pagination: PaginationInternal, event: MouseEvent) {
    const button = event.target as HTMLElement;
    Object.assign(button.style, pagination.style.rowsPerPageSelect?.button?.click);
    const buttonText = button.children[0] as HTMLElement;
    Object.assign(buttonText.style, pagination.style.rowsPerPageSelect?.buttonText?.click);
    const buttonArrow = button.children[1] as HTMLElement;
    Object.assign(buttonArrow.style, pagination.style.rowsPerPageSelect?.buttonArrow?.click);
    pagination.mouseDownOnRowsPerPageButton = true;
    setTimeout(() => (pagination.mouseDownOnRowsPerPageButton = false));
  }

  private static buttonMouseLeave(paginationStyle: PaginationStyle<Required<StatefulCSS>>, event: MouseEvent) {
    const button = event.target as HTMLElement;
    RowsPerPageSelectButtonElement.applyStylesOnElements(button, 'default', paginationStyle.rowsPerPageSelect);
  }

  private static buttonMouseEnter(paginationStyle: PaginationStyle<Required<StatefulCSS>>, event: MouseEvent) {
    const button = event.target as HTMLElement;
    RowsPerPageSelectButtonElement.applyStylesOnElements(button, 'hover', paginationStyle.rowsPerPageSelect);
  }

  public static setEvents(at: ActiveTable, optionsButton: HTMLElement) {
    optionsButton.onmouseenter = RowsPerPageSelectButtonEvents.buttonMouseEnter.bind(this, at._pagination.style);
    optionsButton.onmouseleave = RowsPerPageSelectButtonEvents.buttonMouseLeave.bind(this, at._pagination.style);
    optionsButton.onmousedown = RowsPerPageSelectButtonEvents.buttonMouseDown.bind(this, at._pagination);
    optionsButton.onmouseup = RowsPerPageSelectButtonEvents.buttonMouseEnter.bind(this, at._pagination.style);
    optionsButton.onclick = RowsPerPageSelectButtonEvents.buttonClick.bind(at);
  }
}