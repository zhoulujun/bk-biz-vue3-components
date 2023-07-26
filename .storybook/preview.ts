import type { Preview } from '@storybook/vue3';
import '../src/style/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true, // 展开所有参数信息
    },
  },
};

export default preview;
