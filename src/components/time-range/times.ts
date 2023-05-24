
export type DateTimeType = string | number;
/** 默认的时间范围：近一小时 */
export const DEFAULT_TIME_RANGE: TimeRangeType = ['now/d', 'now/d'];
export type TimeRangeType = [DateTimeType, DateTimeType];
export interface ShortCutsDate {
  text: string;
  short: TimeRangeType;
  value: () => any;
  onClick?: (short: ShortCutsDate) => any;
  data?: {
    n: number;
    unit: string;
  };
}

/**
 * @description 规则集合
 */
export const SHORTCUTS: ShortCutsDate[] = [
  {
    text: '近5分钟',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 60 * 1000 * 5);
      return [start, end];
    },
    short: ['now-5m', 'now'],
    data: { n: -5, unit: 'm' },
  },
  {
    text: '近15分钟',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 60 * 1000 * 15);
      return [start, end];
    },
    short: ['now-15m', 'now'],
    data: { n: -15, unit: 'm' },
  },
  {
    text: '近30分钟',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 60 * 1000 * 30);
      return [start, end];
    },
    short: ['now-30m', 'now'],
    data: { n: -30, unit: 'm' },
  },
  {
    text: '近1小时',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000);
      return [start, end];
    },
    short: ['now-1h', 'now'],
    data: { n: -1, unit: 'h' },
  },
  {
    text: '近3小时',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 3);
      return [start, end];
    },
    short: ['now-3h', 'now'],
    data: { n: -1, unit: 'h' },
  },
  {
    text: '近6小时',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 6);
      return [start, end];
    },
    short: ['now-6h', 'now'],
    data: { n: -6, unit: 'h' },
  },
  {
    text: '近12小时',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 12);
      return [start, end];
    },
    short: ['now-12h', 'now'],
    data: { n: -12, unit: 'h' },
  },
  {
    text: '近24小时',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24);
      return [start, end];
    },
    short: ['now-24h', 'now'],
    data: { n: -24, unit: 'h' },
  },
  {
    text: '近2天',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
      return [start, end];
    },
    short: ['now-2d', 'now'],
    data: { n: -2, unit: 'd' },
  },
  {
    text: '近7天',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
    short: ['now-7d', 'now'],
    data: { n: -7, unit: 'd' },
  },
  {
    text: '近30天',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
    short: ['now-30d', 'now'],
    data: { n: -30, unit: 'd' },
  },
  {
    text: '今天',
    value() {
      const end = new Date();
      end.setSeconds(59, 0);
      end.setMinutes(59);
      end.setHours(23);
      const start = new Date();
      start.setSeconds(0, 0);
      start.setMinutes(0);
      start.setHours(0);
      return [start, end];
    },
    short: ['now/d', 'now/d'],
  },
  {
    text: '昨天',
    value() {
      const start = new Date();
      start.setSeconds(0, 0);
      start.setMinutes(0);
      start.setHours(0);
      // eslint-disable-next-line no-mixed-operators
      start.setTime(start.getTime() - 3600 * 1000 * 24);
      const end = new Date();
      end.setSeconds(59, 0);
      end.setMinutes(59);
      end.setHours(23);
      return [start, end];
    },
    short: ['now-1d/d', 'now-1d/d'],
  },
  {
    text: '前天',
    value() {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
      return [start, end];
    },
    short: ['now-2d/d', 'now-2d/d'],
  },
  // {
  //   text: '本周',
  //   value() {
  //     const end = new Date();
  //     const start = new Date();
  //     start.setTime(start.getTime() - ((3600 * 1000 * 24) * 2));
  //     return [start, end];
  //   },
  //   short: ['now/w', 'now/w'],
  // },
];
