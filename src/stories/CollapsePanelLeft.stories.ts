// Button.stories.ts

import CollapsePanelLeft from '../components/collapse-left/index';
import { Meta, StoryFn } from '@storybook/vue3';
import { Form, Input, Switcher } from 'bkui-vue';
const { FormItem } = Form;
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/CollapsePanelLeft',
  component: CollapsePanelLeft,
  argTypes: {
    modelValue: {
      type: { name: 'boolean', required: false },
      defaultValue: true,
      control: 'boolean',
    },
    content: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'text',
    },
    title: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'string',
    },
    suffix: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'string',
    },
  }
} as Meta<typeof CollapsePanelLeft>;

//👇 We create a “template” of how args map to rendering
const PrimaryTemplate: StoryFn<typeof CollapsePanelLeft> = (args) => ({
  components: { CollapsePanelLeft,Form, Input, Switcher,FormItem },
  setup() {
    return { args };
  },
  template: `
    <CollapsePanelLeft v-bind="args">
        配置内容
    </CollapsePanelLeft>
  `,
});

//👇 Each story then reuses that template
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  title:'图表配置'
}

//👇 We create a “template” of how args map to rendering
const SecondTemplate: StoryFn<typeof CollapsePanelLeft> = (args) => ({
  components: { CollapsePanelLeft,Form, Input, Switcher,FormItem },
  setup() {
    return { args };
  },
  template: `
    <CollapsePanelLeft v-bind="args"/>
  `,
});

//👇 Each story then reuses that template
export const Second = SecondTemplate.bind({});
Second.args = {
  title:'图表配置',
  content:'内如'
};

