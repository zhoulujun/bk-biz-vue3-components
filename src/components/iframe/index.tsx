import { computed, CSSProperties, defineComponent, onMounted, ref } from 'vue';
import Loading from '../loading';
import './index.scss';
import { Message } from 'bkui-vue';

export default defineComponent({
  name: 'IFrame',
  props: {
    link: String,
    loading: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
    contentWidth: {
      type: String || Number,
      default: '100%',
    },
  },
  emits: ['load', 'error'],
  setup(props, { emit }) {
    const rightRef = ref<HTMLElement>(null);
    const loading = ref(true);
    onMounted(() => {
      loading.value = false;
    });
    const loadingFrame = computed(() => props.loading || loading.value);

    let width  = 1920;
    const frameStyle = computed<CSSProperties>(() => {
      if (loadingFrame.value || !props.link) {
        return null;
      }
      if (typeof props.contentWidth === 'string') {
        if (!/\d+/.test(props.contentWidth)) {
          return {
            width: props.contentWidth,
          };
        }
        width = parseInt(props.contentWidth, 10);
      } else {
        width = props.contentWidth || 1920;
      }
      let zoom = 0;
      let height = '100%';
      console.log('rightRef.value?.clientWidth', rightRef.value?.clientWidth);
      if (rightRef.value?.clientWidth) {
        const { clientWidth, clientHeight } = rightRef.value;
        zoom = clientWidth / width;
        height = `${(clientHeight / zoom).toFixed(0)}px`;
      }
      return {
        width: `${width}px`,
        height,
        transform: `scale3d(${zoom},${zoom},1)`,
        'transform-origin': '0 0',
      };
    });

    function onLoad(e: Event) {
      // Message({ theme: 'success', message: '预览页加载成功' });
      emit('load', e);
    }

    function onError(e: Event) {
      Message({ theme: 'error', message: '预览页加载失败' });
      emit('error', e);
    }

    return {
      loadingFrame,
      frameStyle,
      rightRef,
      onLoad,
      onError,
    };
  },
  render() {
    return (
      <div class="iframe-box" ref="rightRef">
        {!this.link && this.placeholder ? (
          <div class="full-height flex-column justify-content-center align-items-center">
            {this.placeholder}
          </div>
        ) : ''}
        {
          this.loading || !this.frameStyle ? (<Loading/>) : (
            <iframe
              onLoad={this.onLoad}
              onError={this.onError}
              style={this.frameStyle}
              src={this.link} frameborder="0"/>
          )
        }
      </div>
    );
  },

});
