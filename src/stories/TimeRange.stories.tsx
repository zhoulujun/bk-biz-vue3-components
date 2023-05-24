import { Meta, StoryFn } from '@storybook/vue3';
import TimeRange from '../components/time-range/index';
import { ref } from 'vue';
import { DEFAULT_TIME_RANGE } from '@/components/time-range/times';

export default {
  title: 'Example/TimeRange',
  parameters: {
    docs: {
      description: {
        component: '时间过滤',
      }
    }
  },
  component: TimeRange,
  argTypes: {
    short: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      control: 'boolean',
    },
    readonly: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      control: 'boolean',
    },
    modelValue:{
      control: 'object',
      table: {
        category: 'List',
        defaultValue: DEFAULT_TIME_RANGE
      }
    }

  }

} as Meta<typeof TimeRange>;

export const Primary: StoryFn<typeof TimeRange> = (args) => ({
  components: { TimeRange },
  setup() {
    return { args };
  },
  template: '<TimeRange v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</TimeRange>',
});

//👇 Each story then reuses that template
export const Short = Primary.bind({});
Short.args = {
  short: true,
};

// //👇 Each story then reuses that template
// export const Readonly = Primary.bind({});
// Readonly.args = {
//   Readonly: true,
// };

