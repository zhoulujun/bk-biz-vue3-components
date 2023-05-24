import { UnitCustom, ValueFormatCategory } from '@/utils/formats/valueFormats';
import { getCategories } from '@/utils/formats/categories';

export * from './valueFormats';
export function labelFormatter(
  value: any,
  unitStr?: string | UnitCustom,
  isPercent = false,
  formatType = 'string',
): string | { value: any, suffix: string | UnitCustom, prefix: string } {
  if (isPercent) {
    if (formatType === 'string') return `${value}%`;
    return { value, suffix: '%', prefix: '' };
  }
  let unit: UnitCustom = {
    choice: [],
    custom: '',
  };
  if (typeof unitStr === 'string') {
    if (unitStr) {
      unit.choice = ['custom'];
      unit.custom = unitStr;
    } else {
      unit.choice = ['Misc', 'short'];
      unit.custom = '';
    }
  } else {
    if (unitStr) {
      unit = unitStr;
    } else {
      unit.choice = ['Misc', 'short'];
      unit.custom = '';
    }
  }
  const categories: ValueFormatCategory[] = getCategories();
  const category = categories.find(item => item.id === unit.choice[0]);
  if (!category) {
    if (formatType === 'string') return `${value}${unit.custom}`;
    return { value, suffix: unit.custom, prefix: '' };
  }
  if (category.id === 'custom') {
    if (formatType === 'string') {
      return `${value}${unit.custom || ''}`;
    }
    return { value, suffix: unit.custom || '', prefix: '' };
  }
  const formatter = category.formats.find(item => item.id === unit.choice[1]);
  if (!formatter) {
    if (formatType === 'string') {
      return `${value}${unit.custom || ''}`;
    }
    return { value, suffix: unit.custom || '', prefix: '' };
  }
  if (formatter.fn instanceof Function) {
    const { prefix = '', text = '', suffix = '' } = formatter.fn(value) || {};
    if (formatType === 'string') {
      return `${prefix}${text}${suffix}`;
    }
    return {
      value: text,
      suffix,
      prefix,
    };
  }
  if (formatType === 'string') return `${value}${formatter.fn}`;
  return { value, suffix: '', prefix: formatter.fn };
}


