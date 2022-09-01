import {LitElement, html, HTMLTemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ediTableStyle} from './edi-table-style';

type TableRow = (number | string)[];
type TableContents = TableRow[];

// spellcheck can be enabled or disabled by the user - enabled by default

@customElement('edi-table')
export class MyElement extends LitElement {
  static override styles = [ediTableStyle];

  @property()
  name = 'World';

  @property({type: Number})
  count = 0;

  @property({type: Array})
  contents: TableContents = [
    [255, 0, 0, 'Red'],
    [254, 0, 0, 'Red'],
  ];

  @property()
  cell = () => {};

  override render() {
    // setTimeout(() => {
    //   this.contents = [
    //     [1, 2, 3, 4],
    //     [1, 2, 3, 5],
    //   ];
    // }, 2000);
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">Click Count: ${this.count}</button>
      <div class="table">${this.generateTable()}</div>
    `;
  }

  private updateTableContent(target: HTMLElement, rowIndex: number, columnIndex: number) {
    this.contents[rowIndex][columnIndex] = target.textContent?.trim() as string;
    console.log(this.cell());
  }

  private generateCells(dataRow: TableRow, rowIndex: number): HTMLTemplateResult[] {
    return dataRow.map((cellText: string | number, columnIndex: number) => {
      // https://lit.dev/docs/localization/best-practices
      // check if this is re-rendered when a text value is changed
      return html`<div
        class="cell"
        contenteditable
        @input=${(e: InputEvent) => this.updateTableContent(e.target as HTMLElement, rowIndex, columnIndex)}
      >
        ${cellText}
      </div>`;
    });
  }

  private populateDataRow(dataRow: TableRow, rowIndex: number): HTMLTemplateResult {
    return html`<div class="row">${this.generateCells(dataRow, rowIndex)}</div>`;
  }

  private populateData(data: TableContents): HTMLTemplateResult[] {
    return data.map((dataRows: TableRow, rowIndex: number) => this.populateDataRow(dataRows, rowIndex));
  }

  private generateTable() {
    return html`<div class="data">${this.populateData(this.contents)}</div>`;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'edi-table': MyElement;
  }
}

// const generateCells = (dataRow: TableRow, rowIndex: number, isHeader = false) => {
//   const isContentEditable = isHeader ? areHeadersEditable : true;
//   return dataRow.map((cellText: string, columnIndex: number) => {
//     const isDefaultValue = typeof defaultValue !== 'undefined' && cellText === defaultValue;
//     return (
//       <div
//         className={`row-${rowIndex}-column-${columnIndex} cell ${isDefaultValue ? defaultValueClassName : ''}`}
//         key={columnIndex}
//         contentEditable={isContentEditable}
//         onInput={updateCellOnInput}
//         onPaste={updateCellsOnPaste}
//         onMouseDown={(e) => (isDefaultValue ? updateCellTextUsingSpecificValue(e.target as HTMLElement, '') : {})}
//         onBlur={(e) => onCellBlur(e)}
//         suppressContentEditableWarning={true}
//       >
//         {cellText}
//       </div>
//     );
//   });
// };

// const populateDataRow = (dataRow: TableRow, rowIndex: number, isHeader = false): JSX.Element => {
//   return (
//     <div className="row" key={rowIndex}>
//       {generateCells(dataRow, rowIndex, isHeader)}
//     </div>
//   );
// };

// const populateData = (data: TableContents): JSX.Element[] => {
//   return data.map((dataRows: TableRow, rowIndex: number) => populateDataRow(dataRows, rowIndex + 1));
// };
