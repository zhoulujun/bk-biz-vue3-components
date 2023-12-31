import type { StorybookConfig } from '@storybook/vue3-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', {
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true
    }
  }, {
    name: '@storybook/addon-styling',
    options: {
      sass: {
        // Require your Sass preprocessor here
        implementation: require('sass')
      }
    }
  }, '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;