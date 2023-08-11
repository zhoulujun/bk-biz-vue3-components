import { Message, TagInput } from 'bkui-vue';
import './index.scss';
import { computed, defineComponent, PropType, ref, shallowRef, VNode } from 'vue';

export default defineComponent({
  name: 'MemberSelector',
  props: {
    /**
     * 选项限制
     */
    optionLimit: {
      type: Number,
      default: 15,
    },
    /**
     * 输入框尺寸大小
     */
    size: {
      type: String as PropType<'mini' | 'small' | 'large'>,
      default: null,
    },
    /**
     * 是否允许创建
     */
    allowCreate: {
      type: Boolean,
      default: true,
    },
    /**
     * 列表最多展示可选个数，-1为不限制
     */
    maxData: {
      type: Number,
      default: -1,
    },
    /**
     * 缓存时间
     */
    cacheTimeout: {
      type: Number,
      default: 1000 * 60 * 60 * 24,
    },
    /**
     * 下拉列表宽度
     */
    contentWidth: {
      type: Number,
      default: 200,
    },
    /**
     * 下拉列表最大高度
     */
    contentMaxHeight: {
      type: Number,
      default: 300,
    },
    placeholder: {
      type: String,
      default: '请输入用户名',
    },
    /**
     * 输入框选择框触发方式
     */
    trigger: {
      type: String as PropType<'focus' | 'search'>,
      default: 'search',
    },
    /**
     * 人员选择器，value对应的字段
     */
    value: {
      type: String,
      default: 'english_name',
    },
    /**
     * 人员选择器，label对应的字段
     */
    label: {
      type: String,
      default: 'chinese_name',
    },
    /**
     * 是否使用分组
     */
    useGroup: Boolean,
    cacheable: Boolean,
    extraGroup: {
      type: Array,
      default: (): any[] => [],
    },
    modelValue: {
      type: Array as PropType<string[]> || String,
      default: '',
    },
    avatars: {
      type: Function,
      default: (node: any) => node.src,
    },
    /**
     * ajax请求接口，可以自定义函数
     */
    api: {
      type: String || Function,
      default: '',
    },
    /**
     * api 请求参数后的回调函数
     */
    callback: Function,
    /**
     * 自定义下拉列表模板
     */
    tpl: {
      type: Function as PropType<(node: any, h: Function, ctx: VNode) => VNode>,
    },
    /**
     * 自定义标签模板
     */
    tagTpl: {
      type: Function as PropType<(node: any, highlightKeyword: Function, h: Function, ctx: VNode) => VNode>,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const content = ref<string[] | string>(props.modelValue);
    const memberList = shallowRef<any[]>([]);
    const loading = ref(true);
    const mData = computed(() => {
      if (props.useGroup) {
        return props.extraGroup.concat([
          {
            [props.label]: '成员',
            [props.value]: '成员',
            children: memberList.value,
          },
        ]);
      }
      return memberList.value;
    });

    function handleSelectChange(data: string[]) {
      emit('change', data);
      emit('update:modelValue', data);
    }

    function requestMemberData() {
      loading.value = true;

      if (localStorage.getItem('member')) {
        const cache = JSON.parse(localStorage.getItem('member'));
        const { timestamp } = cache;
        if (new Date().valueOf() - timestamp > props.cacheTimeout) {
          loading.value = false;
          memberList.value = cache.data;
          return true;
        }
      }
      // const callback = `jsonp_init_bk_member${Math.ceil(Math.random() * 1000)}`;
      const callback = `jsonp_init_bk_member`;
      const script = document.createElement('script');
      let api = typeof props.api === 'function' ? props.api() : props.api;
      if (api.includes('?')) {
        script.src = `${api}&callback=${callback}`;
      } else {
        script.src = `${api}?callback=${callback}`;
      }
      document.body.appendChild(script);
      /**
       *  处理后台请求数据
       * @param res
       */
      function formatData(res: any) {
        if (!res) {
          return null;
        }
        if (typeof props.callback === 'function') {
          return props.callback(res);
        }
        if (!res.result) {
          Message({ theme: 'error', message: res.message || '请求失败' });
          return null;
        }
        return res.data;
      }
      // @ts-ignore
      window[callback] = (res: any) => {
        const data = formatData(res) || [];
        memberList.value = data;
        loading.value = false;
        if (props.cacheable) {
          const cache = {
            timestamp: new Date().valueOf(),
            data,
          };
          localStorage.setItem('member', JSON.stringify(cache));
        }
        document.body.removeChild(script);
      };
    }

    requestMemberData();
    return {
      content,
      memberList,
      loading,
      handleSelectChange,
      mData,
    };
  },
  render() {
    const memberTpl = (
      node: { recipients: any; english_name: string; chinese_name: string; [props: string]: any },
      highlightKeyword: any,
    ) => (
      <div class="flex-row align-items-center p-min">
        <img
          class="avatar-box overflow-hidden mr-min"
          src={this.avatars(node)}
          alt={'人员头像'}/>
        <div
          class="text flex-1 text-ov"
          v-html={`${highlightKeyword(node[this.value])} (${node[this.label]})`}></div>
      </div>
    );
    const tagTpl = (node: any) => (
      <div class="tag">
        <span class="text"><label
          style="text-decoration: underline;">{node[this.value]}</label> ({node[this.label]})</span>
      </div>
    );
    return (
      <TagInput
        v-model={this.content}
        placeholder={this.placeholder}
        saveKey={this.value}
        searchKey={this.value}
        trigger={this.trigger}
        maxData={this.maxData}
        hasDeleteIcon={true}
        allowCreate={this.allowCreate}
        disabled={this.loading}
        tpl={this.tpl || memberTpl}
        tagTpl={this.tagTpl || tagTpl}
        maxResult={this.optionLimit}
        contentWidth={this.contentWidth}
        contentMaxHeight={this.contentMaxHeight}
        list={this.mData}
        useGroup={this.useGroup}
        allowAutoMatch={true}
        class={'full-width'}
        onChange={this.handleSelectChange}
      />
    );
  },
});
