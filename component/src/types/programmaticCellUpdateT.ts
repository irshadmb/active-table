import {CellText} from './tableData';

export interface ProgrammaticCellUpdateT {
  newText: CellText;
  rowIndex: number;
  columnIndex: number;
}

export interface ProgrammaticStructureUpdateT {
  structure: 'row' | 'column';
  isInsert: boolean;
  index: number;
  data?: (string | number)[];
}
