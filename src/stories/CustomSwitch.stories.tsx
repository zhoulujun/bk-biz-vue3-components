import { Meta, StoryFn } from '@storybook/vue3';
// import CustomSwitch from '@/components/custom-switch/index';
import CustomSwitch from '../components/custom-switch/index';
import { ref } from 'vue';

export default {
  title: 'Example/CustomSwitch',
  parameters: {
    assets: [
      "https://codesign.woa.com/app/design/gRxnjPk26DZLmqr/6ym7ZRGn7OWjAYE/inspect", // link to an external image
      "https://bkui-vue.woa.com/button", // link to a webpage
    ],
    docs: {
      description: {
        component: '自定义切换器，比按钮组（bk-button-group）更加灵活。',
      }
    }
  },
  component: CustomSwitch,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'v-model,类型 "Boolean, Number, String"',
      table: {
        category: 'Value',
        defaultValue: false
      }
    },
    value: {
      control: 'boolean',
      description: 'value,类型 "Boolean, Number, String"',
      table: {
        category: 'Value',
        defaultValue: false
      }
    },
    showData: {
      control: 'object',
      table: {
        category: 'List',
        defaultValue: [
          { text: '开启', value: true },
          { text: '关闭', value: false },
        ]
      }
    },
    showText: {
      control: 'object',
      table: {
        category: 'List',
        defaultValue: []
      }
    },
    itemWidth: {
      control: 'number',
      table: {
        category: 'Layout',
        defaultValue: undefined
      }
    },
    isFlexChild: {
      control: 'boolean',
      table: {
        category: 'Layout',
        description: '是否为flex布局',
        defaultValue: false
      }
    },
    backgroundColor: {
      control: 'color',
      description: '背景色',
      table: {
        category: 'Colors',
        defaultValue: '#fff'
      }
    },
    borderColor: {
      control: 'color',
      table: {
        category: 'Colors',
        defaultValue: '#C4C6CC'
      }
    },
    textColor: {
      control: 'color',
      description: '默认文字颜色',
      table: {
        category: 'Colors',
        defaultValue: '#63656E'
      }
    },
    activeBackgroundColor: {
      control: 'color',
      description: '选择项目的背景色',
      table: {
        category: 'Colors',
        defaultValue: '#E1ECFF'
      }
    },
    activeTextColor: {
      control: 'color',
      table: {
        category: 'Colors',
        defaultValue: '#3A84FF'
      }
    },
    change: {
      table: {
        category: 'Events'
      }
    }
  }

} as Meta<typeof CustomSwitch>;

export const Primary: StoryFn<typeof CustomSwitch> = (args) => ({
  components: { CustomSwitch },
  setup() {
    return { args };
  },
  template: '<custom-switch v-bind="args" />',
});

//👇 Each story then reuses that template
export const 文本类型 = Primary.bind({});
文本类型.args = {
  showData: [
    { text: '我的空间', value: 'self' },
    { text: '全部空间', value: 'all' },
  ],
  value: 'all'
};
//👇 Each story then reuses that template
export const 数字类型 = Primary.bind({});
数字类型.args = {
  showData: [
    { text:'金牌', value: 1 },
    { text: '银牌', value: 2 },
  ],
  value: 2
};
export const 自定义展示项 = Primary.bind({});
自定义展示项.args = {
  showData: [
    { text:'金牌', value: 1 },
    { text: '银牌', value: 2 },
  ],
  showText:['蓝鲸第一','蓝鲸第二'],
  value: 2
};

