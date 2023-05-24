// import advancedFormat from 'dayjs/plugin/advancedFormat';
// import localizedFormat from 'dayjs/plugin/localizedFormat';
//
// dayjs.extend(advancedFormat);
// dayjs.extend(localizedFormat);


interface TimeFormat {
  id: string,
  name: string,
}

export const timeFormatMap: TimeFormat[] = [
  {
    id: '',
    name: '自动适配',
  },
  // {
  //   id: 'normal',
  //   name: '默认',
  // },
  {
    id: 'YYYY-MM-DD HH:mm:ss',
    name: 'YYYY-MM-DD HH:mm:ss (e.g. 2020-12-01 12:12:12)',
  },
  {
    id: 'DD/MM/YYYY',
    name: 'DD/MM/YYYY (e.g. 16/08/2020)',
  },
  {
    id: 'YYYY/MM/DD',
    name: 'YYYY/MM/DD (e.g. 2020/08/16)',
  },
  {
    id: 'h:mm A',
    name: 'h:mm A (e.g. 8:02 PM)',
  },
  {
    id: 'h:mm:ss A',
    name: 'h:mm:ss A (e.g. 8:02:18 PM)',
  },
  {
    id: 'MM/DD/YYYY',
    name: 'MM/DD/YYYY (e.g. 08/16/2018)',
  },
  {
    id: 'MMMM D, YYYY',
    name: 'MMMM D, YYYY (e.g. August 16, 2018)',
  },
  {
    id: 'MMMM D, YYYY h:mm A',
    name: 'MMMM D, YYYY h:mm A (e.g. August 16, 2018 8:02 PM)',
  },
  {
    id: 'dddd, MMMM D, YYYY h:mm A',
    name: 'dddd, MMMM D, YYYY h:mm A (e.g. Thursday, August 16, 2018 8:02 PM)',
  },
  {
    id: 'M/D/YYYY',
    name: 'M/D/YYYY (e.g. 8/16/2018)',
  },
  {
    id: 'MMM D, YYYY',
    name: 'MMM D, YYYY (e.g. Aug 16, 2018)',
  },
  {
    id: 'MMM D, YYYY h:mm A',
    name: 'MMM D, YYYY h:mm A (e.g. Aug 16, 2018 8:02 PM)',
  },
  {
    id: 'ddd, MMM D, YYYY h:mm A',
    name: 'ddd, MMM D, YYYY h:mm A	(e.g. Thu, Aug 16, 2018 8:02 PM)',
  },
  {
    id: 'YYYY/MM',
    name: 'YYYY/MM (e.g. 2022/01)',
  },
  // {
  //   id: 'custom',
  //   name: '自定义',
  // },
];
export function getTimeFormat(duration: number) {
  if (duration < 60 * 60 * 24) {
    return 'HH:mm:ss';
  }
  if (duration < 60 * 60 * 24 * 2) {
    return 'HH:mm';
  }
  if (duration < 60 * 60 * 24 * 8) {
    return 'MM-DD HH:mm';
  }
  if (duration <= 60 * 60 * 24 * 30 * 12) {
    return  'MM-DD';
  }
  return  'YYYY-MM-DD';
}
