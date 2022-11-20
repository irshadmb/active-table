import {MaximumRows} from '../../../utils/insertRemoveStructure/insert/maximumRows';
import {EditableTableComponent} from '../../../editable-table-component';
import {KEYBOARD_KEY} from '../../../consts/keyboardKeys';
import {RowDropdownItem} from './rowDropdownItem';
import {DropdownItem} from '../dropdownItem';
import {Dropdown} from '../dropdown';

export class RowDropdown {
  private static INSERT_ROW_ITEMS: [HTMLElement?, HTMLElement?] = [];
  private static LAST_ITEM: HTMLElement;

  // prettier-ignore
  public static hide(etc: EditableTableComponent) {
    const {overlayElementsState: {rowDropdown, fullTableOverlay}} = etc;
    Dropdown.hide(rowDropdown as HTMLElement, fullTableOverlay as HTMLElement);
    // in a timeout because upon pressing esc/enter key on dropdown, the window event is fired after which checks it
    setTimeout(() => delete etc.focusedElements.rowDropdown);
  }

  private static updateItemsStyle(etc: EditableTableComponent) {
    const canAddMoreRows = MaximumRows.canAddMore(etc);
    RowDropdown.INSERT_ROW_ITEMS.forEach((item) => {
      if (!item) return;
      if (canAddMoreRows) {
        item.classList.remove(Dropdown.DISABLED_ITEM_CLASS);
      } else {
        item.classList.add(Dropdown.DISABLED_ITEM_CLASS);
      }
    });
  }

  public static display(this: EditableTableComponent, rowIndex: number, event: MouseEvent) {
    const dropdownElement = this.overlayElementsState.rowDropdown as HTMLElement;
    const fullTableOverlayElement = this.overlayElementsState.fullTableOverlay as HTMLElement;
    RowDropdownItem.rebindButtonItems(this, rowIndex, dropdownElement);
    const cell = event.target as HTMLElement;
    dropdownElement.style.top = `${cell.offsetTop}px`;
    dropdownElement.style.left = `${cell.offsetWidth}px`;
    RowDropdown.updateItemsStyle(this);
    Dropdown.display(dropdownElement, fullTableOverlayElement);
  }

  // the reason why we track window key events is because the table is not actually focused when it is displayed,
  // (unlike column dropdown which has an input), hence initially clicking tab does not focus the dropdown and
  // instead we need to focus it programmatically here. Once focused, the actual dropdown events can take over.
  // prettier-ignore
  public static windowOnKeyDown(etc: EditableTableComponent, event: KeyboardEvent) {
    const {overlayElementsState: {rowDropdown, fullTableOverlay}} = etc;
    if (etc.focusedElements.rowDropdown || !rowDropdown || !fullTableOverlay) return;
    if (event.key === KEYBOARD_KEY.ENTER || event.key === KEYBOARD_KEY.ESCAPE) {
      RowDropdown.hide(etc);
    } else if (event.key === KEYBOARD_KEY.TAB) {
      event.preventDefault();
      // the reason why the last item is used is because the next item that is going to be focused will be the first item
      const lastItem = RowDropdown.LAST_ITEM as HTMLElement;
      DropdownItem.focusNextItem(lastItem, rowDropdown);
      etc.focusedElements.rowDropdown = rowDropdown;
    }
  }

  // WORK - ARROW UP AND DOWN for dropdowns and arrow right for nested dropdown
  // prettier-ignore
  public static dropdownOnKeyDown(this: EditableTableComponent, dropdownElement: HTMLElement, event: KeyboardEvent) {
    if (event.key === KEYBOARD_KEY.ENTER) {
      const itemElement = event.target as HTMLElement;
      itemElement.dispatchEvent(new Event('mouseenter'));
      itemElement.dispatchEvent(new Event('click'));
    } else if (event.key === KEYBOARD_KEY.ESCAPE) {
      RowDropdown.hide(this);
    } else if (event.key === KEYBOARD_KEY.TAB) {
      event.preventDefault();
      DropdownItem.focusNextItem(event.target as HTMLElement, dropdownElement);
    }
  }

  // WORK - when clicked - the item should not lose the focus
  public static create(etc: EditableTableComponent) {
    const dropdownElement = Dropdown.createBase();
    dropdownElement.onkeydown = RowDropdown.dropdownOnKeyDown.bind(etc, dropdownElement);
    RowDropdown.INSERT_ROW_ITEMS[0] = DropdownItem.addButtonItem(dropdownElement, 'Insert Above');
    RowDropdown.INSERT_ROW_ITEMS[1] = DropdownItem.addButtonItem(dropdownElement, 'Insert Below');
    RowDropdown.LAST_ITEM = DropdownItem.addButtonItem(dropdownElement, 'Delete');
    return dropdownElement;
  }
}
