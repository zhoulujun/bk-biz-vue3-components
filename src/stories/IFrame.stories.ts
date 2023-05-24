import { Meta, StoryFn } from '@storybook/vue3';
import IFrame from '../components/iframe/index';
import { ref } from 'vue';

export default {
  title: 'Example/IFrame',
  parameters: {
    docs: {
      description: {
        component: 'iframe,限定嵌入网页宽度，适配容器预览。适合应用在嵌入、邮件预览。',
      }
    }
  },
  component: IFrame,
  argTypes: {
    link: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'text',
    },
    placeholder: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: 'text',
    },
    contentWidth: {
      type: { name: 'number', required: false },
      defaultValue: 1280,
      description: '表单宽度',
      control: 'number',
    }
  }

} as Meta<typeof IFrame>;

export const Primary: StoryFn<typeof IFrame> = (args) => ({
  components: { IFrame },
  setup() {
    const isShow = ref(true)
    const label = args.label || '测试'
    const slotContent = args.slotContent||'测试内容'
    return { args, isShow, label,slotContent };
  },
  template: `<div class="flex-row" ><div class="flex-1">左边表单</div><div class="flex-1" style="height: 400px;"><i-frame v-bind="args" class="full-height" link="https://bk.tencent.com/docs/document/7.0/233/32616"/></div></div>`,
});



