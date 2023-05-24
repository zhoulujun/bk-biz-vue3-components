import dayjs, { ManipulateType } from 'dayjs';
export type DateTimeType = string | number;
export type TimeRangeType = [DateTimeType, DateTimeType];

export type TimeZoneUtc = 'utc';
export type TimeZoneBrowser = 'browser';
export type TimeZone = TimeZoneBrowser | TimeZoneUtc | string;


/** 相对时间范围格式正则 */
export const CUSTOM_TIME_RANGE_REG = /^now(([-+])(\d+)([m|h|d|w|M|y|Y]))?(\/[m|h|d|w|M|y|Y|fy])?/;

type TimeType = 'from' | 'to';

type TimestampsType = [number, number];

/** 处理时间范围的对象 */
export class TimeRange {
  /** 实例化的时间范围对象 */
  value: (dayjs.Dayjs | string)[] = [];

  constructor(times: TimeRangeType) {
    this.init(times);
  }

  /** 初始化时间对象 */
  init(times: TimeRangeType) {
    this.value = times?.map((item, index) => {
      if (typeof item === 'number') {
        return dayjs(item).format('YYYY-MM-DD HH:mm:ss');
      }
      if (typeof item === 'string') {
        return this.transformTimeString(item, !index ? 'from' : 'to');
      }
      return item;
    });
  }

  /** 时间转换 */
  transformTimeString(timeStr: string, type: TimeType): dayjs.Dayjs {
    let momentRes: dayjs.Dayjs = null;
    /** 相对时间范围 */
    const match = timeStr.match(CUSTOM_TIME_RANGE_REG);
    if (!!match) {
      momentRes = dayjs();
      const [target, , method, num, dateType, boundary] = match;
      /** 过去时间 */
      if (method === '-' && num && dateType) {
        momentRes = momentRes.subtract(+num, dateType as ManipulateType);
      }
      /** 未来时间 */
      if (method === '+' && num && dateType) {
        momentRes = momentRes.add(+num, dateType as ManipulateType);
      }
      /** 获取完整时间段 */
      if (!!boundary) {
        if (type === 'from') {
          momentRes = momentRes.startOf(boundary.replace('/', '') as dayjs.OpUnitType);
        }
        if (type === 'to') {
          momentRes = momentRes.endOf(boundary.replace('/', '') as dayjs.OpUnitType);
        }
      }
      /** 相对时间格式错误 */
      if (target !== timeStr) {
        momentRes = dayjs(null);
      }
    } else {
      /** 绝对时间范围 */
      const time = intTimestampStr(timeStr);
      momentRes = dayjs(time);
    }
    return momentRes.isValid() ? momentRes : null;
  }

  /** 格式化时间范围 */
  format(str = 'YYYY-MM-DD HH:mm:ss'): TimeRangeType {
    return this.value.map(item => (item as dayjs.Dayjs)?.format?.(str) || null) as TimeRangeType;
  }

  /** 格式化成秒 */
  unix(): TimestampsType {
    return this.value.map(item => (item as dayjs.Dayjs)?.unix?.() || null) as TimestampsType;
  }
}

// 实时查询时间 - TimeRangeType 转时间戳
export const getTimeRange = (timeRange: TimeRangeType): [number, number] => {
  const date = new TimeRange(timeRange);
  const [start, last] = date.value;
  return [(start as dayjs.Dayjs).valueOf(), (last as dayjs.Dayjs).valueOf()];
};

/** 字符串的时间戳(毫秒)转为数字类型 */
export const intTimestampStr = (str: any): number | null => {
  const isTimestamp = /^\d{1}$|^([1-9]\d{1,12})$/.test(str);
  return isTimestamp ? parseInt(str, 10) : str;
};

/** 将格式为 ['now-1d', 'now'] 转换为 ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss'] */
export const handleTransformTime = (value: TimeRangeType): TimeRangeType => {
  const timeRange = new TimeRange(value);
  return timeRange.format('YYYY-MM-DD HH:mm:ss');
};

/** 转换成秒 */
// eslint-disable-next-line max-len
export const handleTransformToTimestamp = (value: TimeRangeType): TimestampsType => {
  const timeRange = new TimeRange(value);
  return timeRange.unix();
};


