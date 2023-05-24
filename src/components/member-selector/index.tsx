import { Message, TagInput } from 'bkui-vue';
import './index.scss';
import { computed, defineComponent, PropType, ref, shallowRef } from 'vue';

export default defineComponent({
  name: 'MemberSelector',
  props: {
    optionLimit: {
      type: Number,
      default: 15,
    },
    size: {
      type: String as PropType<'mini' | 'small' | 'large'>,
      default: null,
    },
    allowCreate: {
      type: Boolean,
      default: true,
    },
    maxData: {
      type: Number,
      default: -1,
    },
    cacheTimeout: {
      type: Number,
      default: 1000 * 60 * 60 * 24,
    },
    contentWidth: {
      type: Number,
      default: 200,
    },
    contentMaxHeight: {
      type: Number,
      default: 300,
    },
    placeholder: {
      type: String,
      default: '请输入用户名',
    },
    trigger: {
      type: String,
      default: 'search',
    },
    value: {
      type: String,
      default: 'english_name',
    },
    label: {
      type: String,
      default: 'chinese_name',
    },
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
    api: {
      type: String || Function,
      default: '',
    },
    tpl: {
      type: Function,
      default: null,
    },
    tagTpl: {
      type: Function,
      default: null,
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
            english_name: '成员',
            chinese_name: '成员',
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
      // @ts-ignore
      window[callback] = (res: any) => {
        if (res.result) {
          loading.value = false;
          memberList.value = res.data;
        } else {
          Message({ theme: 'error', message: res.message });
        }
        if (props.cacheable) {
          const cache = {
            timestamp: new Date().valueOf(),
            data: res.data,
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
