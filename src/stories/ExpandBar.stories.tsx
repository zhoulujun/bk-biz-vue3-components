import { Meta, StoryFn } from '@storybook/vue3';
import ExpandBar from '../components/expand-bar/index';
import { ref } from 'vue';

export default {
  title: 'Example/ExpandBar',
  parameters: {
    docs: {
      description: {
        component: '收起与折叠',
      }
    }
  },
  component: ExpandBar,
  argTypes: {
    modelValue: {
      type: { name: 'boolean', required: false },
      defaultValue: true,
      control: 'boolean',
    },
    label: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'text',
    },
    handlerClass: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'string',
    },
    renderDirective: {
      type: { name: 'string', required: false },
      defaultValue: 'if',
      description: '渲染模式 对应v-if、v-show',
      options: ['if', 'show'],
      control: 'select',
    }
  }

} as Meta<typeof ExpandBar>;

export const Primary: StoryFn<typeof ExpandBar> = (args) => ({
  components: { ExpandBar },
  setup() {
    const isShow = ref(true)
    const label = args.label || '测试'
    const slotContent = args.slotContent||'测试内容'
    return { args, isShow, label,slotContent };
  },
  template: '<expand-bar v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</expand-bar>',
});

//👇 Each story then reuses that template
export const 插槽 = Primary.bind({});
插槽.args = {
  label: '过滤',
  slotContent: '111'
};


