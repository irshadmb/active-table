import {EditableTableComponent} from '../../editable-table-component';
import {TableContents, TableRow} from '../../types/tableContents';
import {CellEvents} from '../../elements/cell/cellEvents';
import {ACTIVE_COLUMN_TYPE} from '../../enums/columnType';
import {VALIDABLE_CELL_TYPE} from '../../enums/cellType';

export class Sort {
  private static EXTRACT_FLOAT_REGEX = /-?\d+(\.\d+)?$/g;

  // prettier-ignore
  private static update(etc: EditableTableComponent, sortedDataContents: TableContents,) {
    const rowElements = (etc.tableBodyElementRef as HTMLElement).children;
    sortedDataContents.forEach((row, rowIndex) => {
      const relativeRowIndex = rowIndex + 1;
      const rowChildren = rowElements[relativeRowIndex].children;
      row.forEach((cell, columnIndex) => {
        const elementColumnIndex = columnIndex * 2;
        // the reason why updateContents property is set to false is because we do not want to overwrite contents array
        // cells as their row references are still the same with the sortedDataContents, hence upon attempting to
        // overwrite the contents array cells, sortedDataContents cells are also overwritten. This is problematic because
        // sortedDataContents rows are in a different order, hence the cells to be traversed can already be overwritten
        // by the earlier cells
        CellEvents.updateCell(etc, cell as string, relativeRowIndex, columnIndex,
          { processText: false, element: rowChildren[elementColumnIndex] as HTMLElement,
            updateTableEvent: false, updateContents: false });
      });
    });
    etc.contents.splice(1, sortedDataContents.length, ...sortedDataContents);
    etc.onTableUpdate(etc.contents);
  }

  private static sortStringsColumnAscending(contents: TableContents, columnIndex: number) {
    contents.sort((a: TableRow, b: TableRow) => (a[columnIndex] as string).localeCompare(b[columnIndex] as string));
  }

  private static sortStringsColumnDescending(contents: TableContents, columnIndex: number) {
    contents.sort((a: TableRow, b: TableRow) => (b[columnIndex] as string).localeCompare(a[columnIndex] as string));
  }

  private static sortStrings(dataContents: TableContents, columnIndex: number, isAsc: boolean) {
    if (isAsc) {
      Sort.sortStringsColumnAscending(dataContents, columnIndex);
    } else {
      Sort.sortStringsColumnDescending(dataContents, columnIndex);
    }
  }

  private static extractNumberFromString(text: string) {
    const numberStringArr = text.match(Sort.EXTRACT_FLOAT_REGEX);
    if (numberStringArr && numberStringArr.length > 0) {
      return Number(numberStringArr[0]);
    }
    return null;
  }

  private static sortCurrenciesColumnAscending(contents: TableContents, columnIndex: number) {
    contents.sort((a: TableRow, b: TableRow) => {
      return (
        (Sort.extractNumberFromString(a[columnIndex] as string) as number) -
        (Sort.extractNumberFromString(b[columnIndex] as string) as number)
      );
    });
  }

  private static sortCurrenciesColumnDescending(contents: TableContents, columnIndex: number) {
    contents.sort((a: TableRow, b: TableRow) => {
      return (
        (Sort.extractNumberFromString(b[columnIndex] as string) as number) -
        (Sort.extractNumberFromString(a[columnIndex] as string) as number)
      );
    });
  }

  private static sortCurrencies(dataContents: TableContents, columnIndex: number, isAsc: boolean) {
    if (isAsc) {
      Sort.sortCurrenciesColumnAscending(dataContents, columnIndex);
    } else {
      Sort.sortCurrenciesColumnDescending(dataContents, columnIndex);
    }
  }

  private static sortDatesColumnAscending(contents: TableContents, columnIndex: number) {
    contents.sort(
      (a: TableRow, b: TableRow) => Date.parse(a[columnIndex] as string) - Date.parse(b[columnIndex] as string)
    );
  }

  private static sortDatesColumnDescending(contents: TableContents, columnIndex: number) {
    contents.sort(
      (a: TableRow, b: TableRow) => Date.parse(b[columnIndex] as string) - Date.parse(a[columnIndex] as string)
    );
  }

  private static sortDates(dataContents: TableContents, columnIndex: number, isAsc: boolean) {
    if (isAsc) {
      Sort.sortDatesColumnAscending(dataContents, columnIndex);
    } else {
      Sort.sortDatesColumnDescending(dataContents, columnIndex);
    }
  }

  private static sortNumbersColumnAscending(contents: TableContents, columnIndex: number) {
    contents.sort((a: TableRow, b: TableRow) => (a[columnIndex] as number) - (b[columnIndex] as number));
  }

  private static sortNumbersColumnDescending(contents: TableContents, columnIndex: number) {
    contents.sort((a: TableRow, b: TableRow) => (b[columnIndex] as number) - (a[columnIndex] as number));
  }

  private static sortNumbers(dataContents: TableContents, columnIndex: number, isAsc: boolean) {
    if (isAsc) {
      Sort.sortNumbersColumnAscending(dataContents, columnIndex);
    } else {
      Sort.sortNumbersColumnDescending(dataContents, columnIndex);
    }
  }

  private static sortValidableCell: {
    [key in VALIDABLE_CELL_TYPE]: (dataContents: TableContents, columnIndex: number, isAsc: boolean) => void;
  } = {
    [ACTIVE_COLUMN_TYPE.Number]: (dataContents: TableContents, columnIndex: number, isAsc: boolean) =>
      Sort.sortNumbers(dataContents, columnIndex, isAsc),
    [ACTIVE_COLUMN_TYPE.Date]: (dataContents: TableContents, columnIndex: number, isAsc: boolean) =>
      Sort.sortDates(dataContents, columnIndex, isAsc),
    [ACTIVE_COLUMN_TYPE.Currency]: (dataContents: TableContents, columnIndex: number, isAsc: boolean) =>
      Sort.sortCurrencies(dataContents, columnIndex, isAsc),
  };

  public static sortContentsColumn(etc: EditableTableComponent, columnIndex: number, isAsc: boolean) {
    const dataContents = etc.contents.slice(1);
    const columnType = etc.columnsDetails[columnIndex].activeColumnType as keyof typeof VALIDABLE_CELL_TYPE;
    if (VALIDABLE_CELL_TYPE[columnType]) {
      Sort.sortValidableCell[columnType](dataContents, columnIndex, isAsc);
    } else {
      Sort.sortStrings(dataContents, columnIndex, isAsc);
    }
    Sort.update(etc, dataContents);
  }
}

// Alternative way to sort any types

// private static sortAnyAscending(contents: TableContents, columnIndex: number) {
//   contents.sort((a: TableRow, b: TableRow) => {
//     if ((a[columnIndex] as number) < (b[columnIndex] as number)) {
//       return -1;
//     }
//     if ((a[columnIndex] as number) > (b[columnIndex] as number)) {
//       return 1;
//     }
//     return 0;
//   });
// }

// private static sortAnyDescending(contents: TableContents, columnIndex: number) {
//   contents.sort((a: TableRow, b: TableRow) => {
//     if ((a[columnIndex] as number) > (b[columnIndex] as number)) {
//       return -1;
//     }
//     if ((a[columnIndex] as number) < (b[columnIndex] as number)) {
//       return 1;
//     }
//     return 0;
//   });
// }

// private static sortAny(dataContents: TableContents, columnIndex: number, isAsc: boolean) {
//   if (isAsc) {
//     Sort.sortAnyAscending(dataContents, columnIndex);
//   } else {
//     Sort.sortAnyDescending(dataContents, columnIndex);
//   }
// }