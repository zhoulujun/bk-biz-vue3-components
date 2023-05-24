import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, ref, StyleValue, Teleport, } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'StickyBottom',
  props: {
    offsetTarget: {
      type: Function as PropType<() => Element>,
      default: (): Element => null,
    },
    isFixed: Boolean,
    paddingLeft: {
      type: Number,
      default: 60,
    },
    to: {
      type: String,
      default: 'body',
    },
  },
  setup(props) {
    const placeholderRef = ref<HTMLElement>(null);
    const isShowPlaceholder = ref(true);
    const dynamicStyles = computed<StyleValue>(() => {
      return {
        position: props.isFixed ? 'fixed' : 'absolute',
        paddingLeft: `${props.paddingLeft}px`,
      };
    });
    onMounted(() => {
      let observeIo = new IntersectionObserver(
        (entries) => {
          console.log(entries[0].intersectionRatio);
          if (entries[0].intersectionRatio > 0) {
            isShowPlaceholder.value = true;
          } else {
            isShowPlaceholder.value = false;
          }
        },
        {
          threshold: [0.1],
        },
      );
      let timer = setTimeout(() => {
        placeholderRef.value && observeIo.observe(placeholderRef.value);
        clearTimeout(timer);
        timer = null;
      }, 200);
      onBeforeUnmount(() => {
        observeIo.disconnect();
        observeIo = null;
      });
    });

    return {
      placeholderRef,
      isShowPlaceholder,
      dynamicStyles,
    };
  },
  render() {
    return (
      <>
        <div ref="placeholderRef">
          {this.$slots?.default()}
        </div>
        {!this.isShowPlaceholder ? (
          <Teleport disabled={!this.isFixed} to={this.to}>
            <div
              ref="actionRef"
              class="smart-action-box"
              style={this.dynamicStyles}>
              {this.$slots?.default()}
            </div>
          </Teleport>
        ) : ''}

      </>
    );
  },

});
