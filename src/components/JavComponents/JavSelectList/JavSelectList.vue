<template>
  <div class="jav-input-button-toggle">
    <label v-if="props?.label">
      {{props.label ?? 'Escolha'}}
    </label>
    (({{value}}))
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
  .q-btn-group {
    border: 2px solid #F2F2F2;
    padding: 2px;
    border-radius: 5px;
    background-color: #f8f8f8;
    &, * {
      transition: all 0.1s linear;
    }
    .q-btn-item.q-btn {
      border-left: 2px #ececec solid;

      .q-btn__content {
        opacity: 0.6;
      }
      &:first-of-type {
        border-left: 0;
      }

      &:first-of-type {
        -webkit-border-top-left-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-bottomleft: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      &:last-of-type {
        -webkit-border-top-right-radius: 5px;
        -webkit-border-bottom-right-radius: 5px;
        -moz-border-radius-topright: 5px;
        -moz-border-radius-bottomright: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      &.bg-class-toggle-color,
      &.text-class-toggle-text-color {
        background-color: var(--q-primary);
        color: #FFF;
        .q-btn__content {
          transform: scale(1.5);
          opacity: 1;
        }
      }
    }
  }
  .form-input-info {
    text-align: right;
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.5);
    padding: 0px 2px 0px 12px;
    background-color: #ededef;
  }
}
</style>
