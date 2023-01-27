import {StatefulCSSS, NoDimensionCSSStyle} from './cssStyle';

export type DropdownCellOverlayStyle = Omit<StatefulCSSS<Pick<NoDimensionCSSStyle, 'backgroundColor'>>, 'click'>;

export interface DropdownDisplaySettings {
  isAvailable?: boolean; // true by default
  openMethod?: {
    overlayClick?: boolean; // false by default
    cellClick?: boolean; // true by default
  };
  overlayStyle?: DropdownCellOverlayStyle; // use if overlayClick is set to true
}
