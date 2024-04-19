<template>
  <q-btn-group
   type="submit"
   class="jav-buttons"
   color="primary"
   unelevated
  >
  <q-btn-dropdown
    v-if="hasGroupBeforeButtons"
    dense
    auto-close
    color="primary"
  >
    <!-- dropdown content goes here -->
    <q-list dense padding style="width: 250px">
      <template v-for="(beforeButton, iBeforeButton) in groupBeforeButtons" v-bind:key="iBeforeButton">
        <q-separator v-if="beforeButton?.separator" inset />
        <q-item-label v-else-if="beforeButton?.title" header>{{ beforeButton?.title }}</q-item-label>
        <q-item v-else clickable>
          <q-item-section avatar v-if="beforeButton?.beforeIcon ?? beforeButton?.icon">
            <Icon :icon="beforeButton?.beforeIcon ?? beforeButton?.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-if="beforeButton?.label">{{ beforeButton?.label ?? 'Item do menu' }}</q-item-label>
            <q-item-label v-if="beforeButton?.caption ?? beforeButton?.legend" caption>{{ beforeButton?.caption ?? beforeButton.legend ?? 'Legenda' }}</q-item-label>
          </q-item-section>
          <q-item-section side v-if="beforeButton?.afterIcon">
            <Icon :icon="beforeButton?.afterIcon" />
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-btn-dropdown>

  <template v-for="(button, iButton) in ungropButtons" v-bind:key="iButton">
    <JavButton v-bind="button" />
  </template>

  <q-btn-dropdown
    v-if="hasGroupAfterButtons"
    dense
    auto-close
    color="primary"
  >
    <!-- dropdown content goes here -->
    <q-list dense padding style="width: 250px">
      <template v-for="(afterButton, iAfterButton) in groupAfterButtons" v-bind:key="iAfterButton">
        <q-separator  v-if="afterButton?.separator" inset />
        <q-item-label v-else-if="afterButton?.title" header>{{ afterButton?.title }}</q-item-label>
        <q-item v-else clickable @click="afterButton?.click">
          <q-item-section avatar v-if="afterButton?.afterIcon ?? afterButton?.icon">
            <Icon :icon="afterButton?.afterIcon ?? afterButton?.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-if="afterButton?.label">{{ afterButton?.label ?? 'Item do menu' }}</q-item-label>
            <q-item-label v-if="afterButton?.caption ?? afterButton?.legend" caption>{{ afterButton?.caption ?? afterButton.legend ?? 'Legenda' }}</q-item-label>
          </q-item-section>
          <q-item-section side v-if="afterButton?.afterIcon">
            <Icon :icon="afterButton?.afterIcon" />
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-btn-dropdown>
</q-btn-group>
</template>

<script setup lang="ts">
import { IJavButton } from 'components/JavComponents/interfaces';
import JavButton from 'components/JavComponents/JavButton/JavButton.vue';
import { computed, ComputedRef } from 'vue';

const emit = defineEmits(['click']);

const props = defineProps({
  label: String,
  icon: String,
  beforeIcon: String,
  afterIcon: String,
  legend: String,
  url: String,
  submit: Boolean,
  buttons: {
    type: Object,
    default: () => [] as IJavButton[]
  }
})

const groupBeforeButtons: ComputedRef<IJavButton[]> = computed(() => props.buttons.filter((v: IJavButton) => 'groupBefore' in v && v?.groupBefore == true))
const hasGroupBeforeButtons: ComputedRef<boolean> = computed(() => groupBeforeButtons.value.length > 0)

const groupAfterButtons: ComputedRef<IJavButton[]> = computed(() => props.buttons.filter((v: IJavButton) =>  'groupAfter' in v && v?.groupAfter == true))
const hasGroupAfterButtons: ComputedRef<boolean> = computed(() => groupAfterButtons.value.length > 0)

const ungropButtons: ComputedRef<IJavButton[]> = computed(() => props.buttons.filter((v: IJavButton) => (!('groupBefore' in v) || v?.groupBefore == false) && (!('groupAfter' in v) || v?.groupAfter == false)))

const methods = {
  click () {
    console.info('Clicando no botão.');
    emit('click');
  }
}
defineExpose(methods)
</script>

<style lang="scss">
// Escopo do componente
.jav-buttons {
  padding: 0.4em 0.7em;
  min-height: 40px;
  .icon {

  }
  .icon {
    transform: scale(1.4);
    &.before-icon {
      margin-right: 0.7em;
    }
    &.after-icon {
      margin-left:0.7em;
    }
  }
  div {
    display: inline-block;
    line-height: 1em;
    span {
      display: block;
      font-size: 0.7em;
      text-transform: capitalize;
    }
  }
}
.q-item__section {
  min-width: 10px;
  padding: 2px 5px;
  .iconify {
    transform: scale(1.5);
    margin-left: -0.4em;
    margin-right: 0em;
  }
}
.menu {
  .after,  .before {
    margin-top: 0.2em;
    margin-bottom: -0.2em;
    &.before {
      margin-right: 0.7em;
      margin-left: -0.5em;
    }
    &.after {
      margin-right: -0.5em;
      margin-left: 0.7em;
    }
    svg {
      min-width:  25px !important;
      min-height: 25px !important;
    }
  }
}
</style>
