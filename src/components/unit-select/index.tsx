/*
 * @Description 单位选择组件
 */

import { computed, defineComponent, PropType } from 'vue';
import { Cascader, Input } from 'bkui-vue';

import { getCategories } from '@/utils/formats/categories';
import { UnitCustom } from '@/utils/formats/valueFormats';

export default defineComponent({
  name: 'UnitSelect',
  props: {
    modelValue: {
      type: Object as PropType<UnitCustom | string>,
      required: true,
      default: () => ({
        choice: ['Misc', 'short'],
        custom: '',
      }),
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    function processValue() {
      let obj = null;
      if (typeof props.modelValue === 'string') {
        if (props.modelValue === '') {
          obj = {
            choice: ['Misc', 'short'],
            custom: '',
          };
        } else {
          obj = {
            choice: ['custom'],
            custom: props.modelValue,
          };
        }
      } else {
        obj = props.modelValue || {
          choice: ['Misc', 'short'],
          custom: '',
        };
      }
      ctx.emit('update:modelValue', obj);
      return obj;
    }

    const unitList = getCategories().map((item) => {
      const { formats, id, name } = item;
      return { id, name, children: formats };
    });

    const selectValue = computed({
      get() {
        return processValue();
      },
      set(value: UnitCustom) {
        ctx.emit('update:modelValue', value);
      },
    });
    return {
      selectValue,
      unitList,
    };
  },
  render() {
    const renderCustom = () => {
      const { selectValue } = this;
      if (Array.isArray(selectValue.choice) && selectValue.choice.includes('custom')) {
        return (
          <div style={{ minWidth: '50%', width: '100%' }}>
            <Input v-model={selectValue.custom} placeholder={'请输入单位'}/>
          </div>
        );
      }
      return null;
    };
    return (
      <div class={'flex-row'}>
        <Cascader
          style={{ minWidth: '50%', width: '100%' }}
          v-model={this.selectValue.choice}
          list={this.unitList}
          clearable={true}
        />
        {renderCustom()}
      </div>
    );
  },
});
