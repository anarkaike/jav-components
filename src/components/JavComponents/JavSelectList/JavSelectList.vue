<template>
  <div class="jav-input-button-toggle">
    <label v-if="props?.label">
      {{props.label ?? 'Escolha'}}
    </label>
    <q-option-group
      v-model="value"
      :name="props?.name"
      :keep-color="props?.keepColor"
      :type="type"
      :left-label="props?.leftLabel"
      :inline="props?.inline??true"
      :disable="props?.disable"
      :size="props?.size"
      :color="props?.color"
      :options="props.options"
    />
  </div>
</template>

<script setup lang="ts">
import { EInputOptionsTypes } from 'components/JavComponents/enums';
import { IJavOption } from 'components/JavComponents/interfaces';
import { IJavFieldOptions } from 'components/JavComponents/interfaces/IJavFieldOptions';
import { QOptionGroup } from 'quasar';
import { computed, ComputedRef } from 'vue';

const value = defineModel({
  default: () => [] as Array<IJavOption>,
  required: true,
  type: Array<IJavOption>
});
const props = withDefaults(defineProps<IJavFieldOptions>(), {
  label: 'Select Padrão',
  value: '',
  options: () => [] as IJavOption[]
});

const type: ComputedRef<'checkbox'|'radio'|'toggle'> = computed(() => props?.type === EInputOptionsTypes.INPUT_CHECKBOX ? 'checkbox' : 'radio');
// const propsInternal: ComputedRef<QOptionGroup> = computed(() => {
//   return filterProps(props, Object.keys(QOptionGroup) as (keyof QOptionGroup)[]);
// })
// const options: Ref<IJavOption[]> = ref(props?.options ?? [] as IJavOption[]);
</script>

<style lang="scss">
.jav-input-button-toggle {
  background-color: #F2F2F2;
  border-radius: 5px;
  label {
    display: block;
    padding: 0.2em 1em;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 1.5em;
  }
  .q-option-group {
    border: 2px solid rgba(242, 242, 242, 0.5);
    padding: 2px;
    border-radius: 5px;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    width: 100%;
    &, * {
      transition: all 0.1s linear;
    }
    > div {
      border-left: 2px #ececec solid;
      flex: 1;
      div[aria-checked="true"] {
        color: blue;
        font-weight: bold;
        transform: scale(1.2);
      }
    }
  }
}
</style>
