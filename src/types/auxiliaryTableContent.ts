import {HoverableElementStyleClient} from './hoverableElementStyle';

// REF-19
// wrapIndexCellText:
// By default this is set to false and index column width is updated by analyzing the number of digits present in
// the highest index number to prevent wrapping. However when set to true, the default behaviour can be turned
// off to instead wrap the numbers. This would cause column width always remain as default (30px).
export type IndexColumnT =
  | boolean
  | {
      wrapIndexCellText: boolean; // false by default
    };

export interface AuxiliaryTableContentDisplayProps {
  displayAddRowCell?: boolean; // true by default
  // called cells to the client, but cells internally as it is made up of multiple cells
  displayAddColumnCell?: boolean; // true by default
  displayIndexColumn?: IndexColumnT;
  indexColumnCountStartsAtHeader?: boolean; // false by default
}

export interface AuxiliaryTableContentGenericProps {
  styleProps?: HoverableElementStyleClient;
  inheritHeaderStyle?: boolean; // true by default, applied to header only and will not inherit the default header style
}

// REF-22
// auxiliary content is comprised of index column, add new column column and add new row row
// to be used by the client
export type AuxiliaryTableContent = AuxiliaryTableContentGenericProps & AuxiliaryTableContentDisplayProps;
