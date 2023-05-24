// Button.stories.ts

import Footer from '../components/footer/index';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    info:{
      description: '版权信息等',
      control: 'text',
    },
    links:{
      description: '友情链接等',
      control: 'object'
    }
  }
} as Meta<typeof Footer>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof Footer> = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: '<Footer v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {

  links:[
    {
      title: '技术支持',
      url: 'https://wpa1.qq.com/KziXGWJs?_type=wpa&amp;qidian=true',
    },
    {
      title: '社区论坛',
      url: 'https://bk.tencent.com/s-mart/community/',
    },
    {
      title: '产品官网',
      url: 'https://bk.tencent.com/index/',
    },
  ],
  info:'Copyright © 2012-2022 Tencent BlueKing. All Rights Reserved.  V3.6.2858(3.6.2673)'
};
