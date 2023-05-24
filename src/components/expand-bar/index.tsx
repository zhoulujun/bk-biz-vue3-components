import { defineComponent, PropType, ref } from 'vue';
import { AngleDown, AngleUp } from 'bkui-vue/lib/icon';

export default defineComponent({
  name: 'ExpandBar',
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    label: String,
    handlerClass: {
      type: String,
      default: 'mb-medium',
    },
    renderDirective: {
      type: String as PropType<'if' | 'show'>,
      default: 'if',
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots }) {
    const isShowPreview = ref(props.modelValue);

    function change() {
      const val = !isShowPreview.value;
      isShowPreview.value = val;
      emit('update:modelValue', val);
      emit('change', val);
    }

    return () => (
      <div>
        <div onClick={change} class={`cursor-pointer flex-row align-items-center ${props.handlerClass}`}>
          <span>{props.label}</span>
          <span class="font-big">{isShowPreview.value ? <AngleUp /> : <AngleDown />}</span>
        </div>
        {
          props.renderDirective === 'show' ? (
            <div v-show={isShowPreview.value}>{slots?.default()}</div>
          ) : isShowPreview.value ? slots?.default() : ''
        }
      </div>
    );
  },
});

