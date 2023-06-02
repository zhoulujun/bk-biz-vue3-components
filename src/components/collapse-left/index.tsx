import { defineComponent, PropType, ref, VNode } from 'vue';
import { Collapse } from 'bkui-vue';
import { DownShape, UpShape } from 'bkui-vue/lib/icon';

const { CollapsePanel } = Collapse;
export default defineComponent({
  name: 'CollapseLeft',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String || Object as PropType<VNode> || Function,
    },
    title: {
      type: String || Object as PropType<VNode>,
    },
    suffix: {
      type: String || Object as PropType<VNode>,
    },
  },
  emits: ['update:modelValue', 'change', 'ensure', 'clear'],
  setup(props, { slots }) {
    const collapsed = ref(true);
    return () => (
      <CollapsePanel
        v-model={collapsed.value}
        v-slots={{
          header: () => (
            <div class="bk-collapse-header flex-row align-items-center">
              <span class="mr-small">{collapsed.value ? <UpShape/> : <DownShape/>}</span>
              {props.title}
              {props.suffix}
            </div>
          ),
          content: () => {
            if (props.content) {
              if (typeof props.content === 'function') {
                return props.content();
              }
              return props.content;
            }
            return slots?.default();
          },
        }}
      />

    );
  },
});
