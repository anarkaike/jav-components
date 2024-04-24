<template>
  <JavInputButtonToggle
    v-if="props?.type==EInputOptionsTypes.INPUT_BUTTONS"
    v-bind="props"
    v-model="value"
  />
  <JavSelectList
    v-else-if="props?.type==EInputOptionsTypes.INPUT_CHECKBOX || props?.type==EInputOptionsTypes.INPUT_RADIO"
    v-bind="props"
    v-model="value"
  />
  <JavSelect
    v-else
    v-bind="props"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { EInputOptionsTypes } from 'components/JavComponents/enums';
import { IJavOption } from 'components/JavComponents/interfaces';
import { IJavFieldOptions } from 'components/JavComponents/interfaces/IJavFieldOptions';
import { ModelRef } from 'vue';
import JavInputButtonToggle from 'components/JavComponents/JavInputButtonToggle/JavInputButtonToggle.vue';
import JavSelect from 'components/JavComponents/JavSelect/JavSelect.vue';
import JavSelectList from 'components/JavComponents/JavSelectList/JavSelectList.vue';

const props =withDefaults(defineProps<IJavFieldOptions>(), {
  label: 'Select Padrão',
  value: '',
  type: EInputOptionsTypes.INPUT_SELECT,
  options: () => [] as IJavOption[]
});
const value: ModelRef<string | number | null | undefined> = defineModel();
// const options: Ref<IOption[]> = ref(props?.options ?? []);
</script>
