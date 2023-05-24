import { defineComponent, PropType } from 'vue';
import { Loading } from 'bkui-vue';

export default defineComponent({
  name: 'LoadingPlaceholder',
  props: {
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<'small' | 'large' | 'mini'>,
      default: 'small',
    },
  },
  render() {
    return (
      <div class="full-width full-height flex-row align-items-center justify-content-center text-center">
        <Loading size={this.size} title={this.title}/>
      </div>
    );
  },
});
