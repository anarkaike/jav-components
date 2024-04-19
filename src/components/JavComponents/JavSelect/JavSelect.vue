<template>
  <q-select
    dense
    class="jav-select"
    filled
    v-model="value"
    use-input
    input-debounce="0"
    @filter="methods.filterFn"
    v-bind="props"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>

</template>

<script setup lang="ts">
import { IJavOption } from 'components/JavComponents/interfaces';
import { IJavFieldOptions } from 'components/JavComponents/interfaces/IJavFieldOptions';
import { ValidationRule } from 'quasar';
import { ModelRef, Ref, ref } from 'vue';

// const props = defineProps({
//   label: String,
//   icon: String,
//   beforeIcon: String,
//   afterIcon: String,
//   legend: String,
//   rules: {
//     type: Array as () => ValidationRule[],
//     default: () => ([] as ValidationRule[])
//   },
//   onchange: {
//     type: Function,
//     default: () => {}
//   },
//   options: {
//     type: Array as () => string[],
//     default: () => []
//   }
// })
export interface IFi {
  label?: string,
  icon?: string,
  type?: string,
  beforeIcon?: string,
  afterIcon?: string,
  legend?: string,
  rules?: ValidationRule[],
  onchange?: any,
  options?: IJavOption[]
}

const value: ModelRef<string | number | null | undefined> = defineModel();
const props = withDefaults(defineProps<IJavFieldOptions>(), {
  label: 'Select Padrão',
  options: () => [] as IJavOption[]
});
const options: Ref<IJavOption[]> = ref(props?.options ?? []);
const methods = {
  filterFn (val: string, update: any) {
    if (val === '') {
      update(() => {
        options.value = props?.options;
      });
      return;
    }
    update(() => {
      const needle = val.toLowerCase();
      options.value = props.options.filter(v => (v?.label?.toLowerCase() ?? '').indexOf(needle) > -1);
    });
  }
};
</script>

<style lang="scss">
.jav-select {
}
</style>
