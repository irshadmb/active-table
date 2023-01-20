import {TableContent, TableRow} from '../../types/tableContent';
import {ColumnsDetailsT} from '../../types/columnDetails';
import {EMPTY_STRING} from '../../consts/text';

export class InitialContentProcessing {
  private static cleanupContentThatDidNotGetAdded(contents: TableContent, columnsDetails: ColumnsDetailsT) {
    if (contents[0]?.length - columnsDetails.length > 0) contents.forEach((row) => row.splice(columnsDetails.length));
    if (contents.length > columnsDetails[0]?.elements.length) contents.splice(columnsDetails[0].elements.length);
  }

  public static postProcess(content: TableContent, columnsDetails: ColumnsDetailsT) {
    setTimeout(() => InitialContentProcessing.cleanupContentThatDidNotGetAdded(content, columnsDetails));
  }

  private static fillRow(row: TableRow, maxRowLength: number) {
    const newArray = new Array(maxRowLength - row.length).fill(EMPTY_STRING);
    row.splice(row.length, maxRowLength - row.length, ...newArray);
  }

  private static makeAllContentRowsSameLength(content: TableContent, maxRowLength: number) {
    content.forEach((row) => {
      if (row.length < maxRowLength) {
        InitialContentProcessing.fillRow(row, maxRowLength);
      }
    });
  }

  private static getMaxRowLength(content: TableContent) {
    return content.reduce((currentMax, row) => {
      return Math.max(currentMax, row.length);
    }, 0);
  }

  private static removeRowsExceedingLimit(content: TableContent, maxRows?: number) {
    if (maxRows !== undefined && maxRows > 0 && content.length > maxRows) {
      content.splice(maxRows, content.length - 1);
    }
  }

  public static preProcess(content: TableContent, maxRows?: number) {
    InitialContentProcessing.removeRowsExceedingLimit(content, maxRows);
    const maxRowLength = InitialContentProcessing.getMaxRowLength(content);
    InitialContentProcessing.makeAllContentRowsSameLength(content, maxRowLength);
  }
}