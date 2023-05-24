import { defineComponent, ref } from 'vue';
import CustomSwitch from '@/components/custom-switch';

export default defineComponent({
  name: 'App',
  setup() {
    const demoSwitch = ref(true);
    return () => (
      <div>
        demo page。
        <div><CustomSwitch v-model={demoSwitch.value}/></div>
      </div>
    );
  }
});

