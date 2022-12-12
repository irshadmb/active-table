import {ColumnSettingsInternal, DefaultColumnsSettings} from '../../types/columnsSettings';
import {ProcessedDataTextStyle} from '../columnType/processedDataTextStyle';
import {EditableTableComponent} from '../../editable-table-component';
import {GenericElementUtils} from '../elements/genericElementUtils';
import {ColumnDetails} from '../columnDetails/columnDetails';
import {CellElement} from '../../elements/cell/cellElement';
import {ColumnDetailsT} from '../../types/columnDetails';
import {GenericObject} from '../../types/genericObject';
import {CellCSSStyle} from '../../types/cssStyle';

export class ColumnSettingsStyleUtils {
  public static applySettingsStyleOnCell(settings: ColumnSettingsInternal, cellElement: HTMLElement, isHeader: boolean) {
    Object.assign(cellElement.style, settings.cellStyle || {}, isHeader ? settings.headerStyleProps?.default || {} : {});
  }

  private static applyHeaderSettingStyle(columnElements: HTMLElement[], settings: ColumnSettingsInternal) {
    ColumnSettingsStyleUtils.applySettingsStyleOnCell(settings, columnElements[0], true);
  }

  public static unsetCellSettingStyle(element: HTMLElement, style: CellCSSStyle) {
    const unsetStyles = Object.keys(style).reduce<GenericObject>((obj, styleName) => {
      obj[styleName] = '';
      return obj;
    }, {});
    Object.assign(element.style, unsetStyles);
  }

  private static unsetHeaderSettingStyle(headerElement: HTMLElement, style: CellCSSStyle) {
    Object.keys(style).forEach((styleName) => {
      GenericElementUtils.setStyle(headerElement, styleName, '');
    });
  }

  // prettier-ignore
  private static resetHeaderStyleToDefault(columnElements: HTMLElement[],
      settings: ColumnSettingsInternal, defaultColumnsSettings: DefaultColumnsSettings) {
    if (settings.headerStyleProps?.default) {
      ColumnSettingsStyleUtils.unsetHeaderSettingStyle(columnElements[0], settings.headerStyleProps.default);
    }
    if (settings.cellStyle) ColumnSettingsStyleUtils.unsetCellSettingStyle(columnElements[0], settings.cellStyle);
    const {cellStyle, headerStyleProps} = defaultColumnsSettings;
    CellElement.setDefaultCellStyle(columnElements[0], cellStyle, headerStyleProps?.default);
  }

  // prettier-ignore
  private static updateHeaderStyle(defaultColumnsSettings: DefaultColumnsSettings,
      columnDetails: ColumnDetailsT, settings: ColumnSettingsInternal, isSetNew: boolean) {
    ColumnSettingsStyleUtils.resetHeaderStyleToDefault(columnDetails.elements, settings, defaultColumnsSettings);
    if (isSetNew) ColumnSettingsStyleUtils.applyHeaderSettingStyle(columnDetails.elements, settings);
    columnDetails.headerStateColors = ColumnDetails.createHeaderStateColors(
      defaultColumnsSettings, isSetNew ? settings : undefined);
  }

  // prettier-ignore
  private static changeHeaderStyleFunc(this: EditableTableComponent, columnIndex: number,
      oldSettings: ColumnSettingsInternal, newSettings: ColumnSettingsInternal) {
    const columnDetails = this.columnsDetails[columnIndex];
    if (newSettings.cellStyle || newSettings.headerStyleProps?.default) {
      ColumnSettingsStyleUtils.updateHeaderStyle(this.defaultColumnsSettings, columnDetails, newSettings, true);
    } else if (oldSettings.cellStyle || oldSettings.headerStyleProps?.default) {
      ColumnSettingsStyleUtils.updateHeaderStyle(this.defaultColumnsSettings, columnDetails, oldSettings, false);
    }
  }

  // prettier-ignore
  public static changeStyle(etc: EditableTableComponent, columnIndex: number,
      oldSettings: ColumnSettingsInternal, newSettings: ColumnSettingsInternal) {
    // resetDataCellsStyle unsets and reapplies settings style hence we only need to set the header here
    ProcessedDataTextStyle.resetDataCellsStyle(etc, columnIndex,
      ColumnSettingsStyleUtils.changeHeaderStyleFunc.bind(etc, columnIndex, oldSettings, newSettings))
  }
}
