import { Meta, StoryFn } from '@storybook/vue3';
import MemberSelector from '../components/member-selector/index';
import { ref } from 'vue';

export default {
  title: 'Example/MemberSelector',
  component: MemberSelector,
  argTypes: {
    modelValue: {
      control: 'object',
      description: 'v-model',
      table: {
        category: '值',
        defaultValue: []
      }
    },
    allowCreate: {
      control: 'boolean',
      description: '是否允许创建',
      table: {
        category: '值',
        defaultValue: true
      }
    },
    optionLimit: {
      control: 'number',
      description: '最多可选个数',
      table: {
        category: '限制',
        defaultValue: 15
      }
    },
    contentWidth: {
      control: 'number',
      description: '自定义设置下拉弹框的宽度，单选会撑满因此失效',
      table: {
        category: '限制',
        defaultValue: 200
      }
    },
    contentMaxHeight: {
      control: 'number',
      description: '自定义设置下拉弹框的长度',
      table: {
        category: '限制',
        defaultValue: 300
      }
    },
    size: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: '输入框尺寸大小',
      options: ['mini', 'small', 'large', ''],
      control: 'select',
      table: {
        category: '外观',
        defaultValue: ''
      }
    },
    maxData: {
      control: 'number',
      description: '下拉列表搜索结果显示个数，默认为 10，-1为不限制。',
      table: {
        category: '限制',
        defaultValue: -1
      }
    },
    cacheTimeout: {
      control: 'number',
      description: '缓存时间',
      table: {
        category: '请求',
        defaultValue: 1000 * 60 * 60 * 24
      }
    },
    placeholder: {
      control: 'text',
      description: '空数据时显示的提示文案',
      table: {
        category: '外观',
        defaultValue: '请输入用户名'
      }
    },
    trigger: {
      control: 'text',
      description: '搜索列表触发展示方式，默认是输入关键字搜索时展示，也可以获取焦点是展示（用在数据量少的时候）',
      table: {
        category: '外观',
        defaultValue: 'search'
      }
    },
    label: {
      control: 'text',
      description: '展示字段的 key 值',
      table: {
        category: '值',
        defaultValue: 'chinese_name'
      }
    },
    value: {
      control: 'text',
      description: '保存字段的 key 值',
      table: {
        category: '值',
        defaultValue: 'english_name'
      }
    },
    avatars: {
      description: '头像获取防范，默认(node)=>node.src',
      table: {
        category: '请求'
      }
    },

    api: {
      description: '用户列表获取接口,可以为函数',
      table: {
        category: '请求',
        defaultValue: (node: { src: string }) => node.src
      }
    },
    callback:{
      description: '用请求列表，数据处理函数。默认是api返回数据respond.data直接给到选择列表。如果传入 callback 函数，callback(respond) 函数的返回值会作为选择列表的数据。',
      table: {
        category: '请求',
        defaultValue: null
      }
    },
    useGroup: {
      control: 'boolean',
      description: '配置 use-group 来启用分组功能， 数据源必须加上 children 的配置',
      table: {
        category: '外观',
        defaultValue: false
      }
    },
    cacheable: {
      control: 'boolean',
      description: '是否画缓存请求',
      table: {
        category: '请求',
        defaultValue: false
      }
    },
    tpl: {
      description: '设置 tpl 方法自定义下拉列表展示',
      table: {
        category: '模板'
      }
    },
    tagTpl: {
      description: '设置 tagTpl 方法自定义标签展示',
      table: {
        category: '模板'
      }
    },
    change: {
      table: {
        category: 'Events'
      }
    }
  }

} as Meta<typeof MemberSelector>;

export const Primary: StoryFn<typeof MemberSelector> = (args) => ({
  components: { MemberSelector },
  setup() {
    const name = ref<string[]>([]);
    const api = args.api || 'https://www.zhoulujun.cn/test/jsonp.js?a=3';
    return { args, name, api };
  },
  template: '<MemberSelector v-model="name" v-bind="args" :api="api" />',
});

//👇 Each story then reuses that template
export const Placeholder = Primary.bind({});
Placeholder.args = {
  api: 'https://www.zhoulujun.cn/test/jsonp.js?a=3',
  placeholder: '请输入收件人RTX或邮件组名称',
};
Primary.parameters = {
  docs: {
    description: {
      component: '用户选择器',
    },
    source: {
      code: '222',
      language: 'tsx'
    }
  },
};

export const 下拉列表尺寸设置 = Primary.bind({});
下拉列表尺寸设置.args = {
  api: 'https://www.zhoulujun.cn/test/jsonp.js?a=3',
  contentMaxHeight: 500,
  contentWidth: 600,
};
下拉列表尺寸设置.parameters = {
  docs: {
    description: {
      component: '用户选择器',
    },
    source: {
      code: '222'
    }
  },
};
//👇 Each story then reuses that template
export const 标签模板 = Primary.bind({});
标签模板.args = {
  placeholder: '请输入收件人RTX或邮件组名称',
  api: 'https://www.zhoulujun.cn/test/jsonp.js?a=3',
  avatars: (node: { url: string }) => 'https://www.tencent.com/data/logo-pic/1.2.png',
  tagTpl: ({ chinese_name, english_name, city }: { chinese_name: string, english_name: string, city: string }) => (
    <div class="tag">
      <span class="text"><label
        style="text-decoration: underline;">{english_name}</label> ({chinese_name}-{city})</span>
    </div>
  )
};

export const 列表模板 = Primary.bind({});
列表模板.args = {
  api: 'https://www.zhoulujun.cn/test/jsonp.js?a=3',
  placeholder: '请输入收件人RTX或邮件组名称',
  avatars: (node: { url: string }) => node.url,
  tagTpl: ({ chinese_name, english_name, city }: { chinese_name: string, english_name: string, city: string }) => (
    <div class="tag">
      <span class="text"><label
        style="text-decoration: underline;">{english_name}</label> ({chinese_name}-{city})</span>
    </div>
  )
};



