/*
 * @Description 自定义Switch组件
 */
import { defineComponent, PropType, ref, watch } from 'vue';
import classNames from 'classnames';
import './index.scss';


interface ShowData {
  text: string;
  value: number | string | boolean;
}

export default defineComponent({
  name: 'CustomSwitch',
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: false,
    },
    value: {
      type: [Boolean, Number, String],
      default: false,
    },
    isFlexChild: {
      type: Boolean,
      default: false,
    },
    showData: {
      type: Object as PropType<ShowData[]>,
      default: () => [
        { text: '开启', value: true },
        { text: '关闭', value: false },
      ],
    },
    // 定义显示文本,与传入的数据顺序对应
    showText: {
      type: Array,
      default: (): string[] => [],
    },
    backgroundColor: {
      // 背景色
      type: String,
      default: '#fff',
    },
    activeBackgroundColor: {
      // 激活背景色
      type: String,
      default: '#E1ECFF',
    },
    textColor: {
      // 文字颜色
      type: String,
      default: '#63656E',
    },
    activeTextColor: {
      // 激活文字颜色
      type: String,
      default: '#3A84FF',
    },
    itemWidth: {
      // 每一项宽度
      type: Number,
    },
    activeBorderColor: {
      type: String,
      default: '#3A84FF',
    },
    borderColor: {
      type: String,
      default: '#C4C6CC',
    },
    height: {
      type: Number,
      default: 26,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(prop) {
    const val = ref<string | number | boolean>(prop.modelValue || prop.value);
    const activeIndex = ref(0);
    watch(
      () => [prop.modelValue, prop.value],
      ([modelValue, value]) => {
        val.value = modelValue || value;
        activeIndex.value = prop.showData.findIndex(ele => ele.value === val.value);
      },
      { deep: true, immediate: true },
    );
    return {
      val,
      activeIndex,
    };
  },
  methods: {
    handleValueChange(index: number) {
      this.activeIndex = index;
      this.val = this.showData[index].value;
      this.$emit('update:modelValue', this.val);
      this.$emit('change', this.val);
    },
  },
  render() {
    const itemStyle = {
      width: `${this.itemWidth ? `${this.itemWidth}px` : 'auto'}`,
      color: this.textColor,
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
    };

    const activeItemStyle = {
      width: `${this.itemWidth ? `${this.itemWidth}px` : 'auto'}`,
      color: this.activeTextColor,
      backgroundColor: this.activeBackgroundColor,
      borderColor: this.activeBorderColor,
    };

    return (
      <div class="custom-switch" style={{ height: `${this.height}px` }}>
        {this.showData.length > 0
          ? this.showData.map((item: ShowData, index) => (
            <div
              class={classNames('custom-switch-button', {
                'pre-button': this.activeIndex - index === 1,
                'active-button': this.activeIndex === index,
                'flex-1': this.isFlexChild,
              })}
              style={this.val === item.value ? activeItemStyle : itemStyle}
              key={index}
              onClick={() => this.handleValueChange(index)}
            >
              {this.showData.length <= 2 && this.showText.length > 0 ? this.showText[index] : item.text}
            </div>
          ))
          : '请传入数据'}
      </div>
    );
  },
});
