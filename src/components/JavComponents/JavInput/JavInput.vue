<template>
  <q-input
    class="jav-input"
    filled
    dense
    v-model="value"
    v-bind="props"
  >
    <template v-slot:prepend v-if="props?.beforeIcon ?? props?.icon">
      <Icon :icon="props?.beforeIcon ?? props?.icon" />
    </template>
    <template v-slot:append v-if="props?.afterIcon">
      <Icon :icon="props?.afterIcon" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { IJavField } from 'components/JavComponents/interfaces';
import { ModelRef } from 'vue';

const value: ModelRef<string | number | undefined> = defineModel();
const props = withDefaults(defineProps<IJavField>(), {
  label: 'Label Padrão'
});

</script>
