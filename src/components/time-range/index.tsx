import { defineComponent, PropType, ref, watch } from 'vue';
import { DatePicker, Input } from 'bkui-vue';
import { handleTransformTime } from './utils';
import './index.scss';
import { AngleDown, AngleUp } from 'bkui-vue/lib/icon';
import { DEFAULT_TIME_RANGE, SHORTCUTS, ShortCutsDate } from '@/components/time-range/times';

export type DateTimeType = string | number;
export type TimeRangeType = [DateTimeType, DateTimeType];
export type TimeRangeDisplayType = 'normal' | 'simple' | 'border' | 'shorts';

export default defineComponent({
  name: 'TimeRange',
  props: {
    short: Boolean,
    readonly: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Array as PropType<DateTimeType[]>,
      default: (): TimeRangeType => DEFAULT_TIME_RANGE,
    },
  },
  emits: {
    change: (value: TimeRangeType): TimeRangeType => value,
  },
  setup(props, { emit }) {
    const localValue = ref(props.modelValue);
    const selectedIndex = SHORTCUTS.findIndex(item => item.short.join('') === props.modelValue.join(''));
    const shortcutSelectedIndex = ref(selectedIndex || 11);
    const isPanelTimeRange = ref(false);
    const datePicker = ref<InstanceType<typeof DatePicker>>(null);
    const timezone = ref('Asia/Shanghai');
    const timeDisplay = ref('');
    const timestamp = ref<TimeRangeType>(['', '']);

    watch(
      (): any => props.modelValue,
      (value: TimeRangeType) => {
        transferTime(value);
      },
      { deep: true, immediate: true },
    );

    function changeTime(value: TimeRangeType, type: string) {
      if (type === 'shortcut') {
        // @ts-ignore
        emit('change', localValue.value);
      } else {
        emit('change', value);
      }
    }

    function transferTime(value: TimeRangeType) {
      localValue.value = [...value];
      const dateArr = handleTransformTime(value);
      timestamp.value = [dateArr[0], dateArr[1]];
    }

    function onShortcutChange(data: ShortCutsDate, _index: number) {
      if (data) {
        const [start, end] = data.short;
        emit('change', [start, end]);
        localValue.value = [start, end];
      }
    }

    return {
      shortcutSelectedIndex,
      datePicker,
      localValue,
      timezone,
      timestamp,
      timeDisplay,
      isPanelTimeRange,
      changeTime,
      onShortcutChange,
    };
  },
  render() {
    /** 时间区间快捷选项 */

    return (
      <div class={`time-range time-range-${this.short ? 'short' : 'wrap'} flex-row align-items-center `}>
        {this.short ? (
          <>
            <i class="bkvision-icon icon-ic_fuwushijian"/>
            <span class="ml-small mr-min">{this.datePicker?.displayValue}</span>
            <span class="time-range-arrow">{this.datePicker?.visible ? <AngleUp/> : <AngleDown/>}</span>
          </>
        ) : ''}
        <DatePicker
          ref="datePicker"
          v-model={this.timestamp}
          clearable={false}
          onChange={this.changeTime}
          shortcuts={SHORTCUTS}
          readonly={this.readonly}
          shortcutSelectedIndex={this.shortcutSelectedIndex}
          useShortcutText={true}
          shortcutClose={true}
          onShortcut-change={this.onShortcutChange}
          format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期范围"
          type="daterange"
        >
          {{
            header: () => (
              <div class="time-range-custom">
                <span class="pr-small">从</span>
                <Input class="custom-input" size="small" v-model={this.localValue[0]}/>
                <span class="pl-normal pr-normal">至</span>
                <Input class="custom-input" size="small" v-model={this.localValue[1]}/>
              </div>
            ),
          }}
        </DatePicker>
      </div>
    );
  },
});
