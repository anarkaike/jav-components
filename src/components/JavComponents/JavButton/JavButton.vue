<template>
  <q-btn
    class="jav-button"
    color="primary"
    unelevated
    @click="methods.click"
  >
    <slot name="before">
      <Icon class="before-icon icon" v-if="props.beforeIcon ?? props.icon" :icon="props.beforeIcon ?? props.icon" />
    </slot>
    <slot>
      <div>
        {{ props.label ?? 'Botão' }}
        <span v-if="props.legend">{{ props.legend }}</span>
      </div>
    </slot>
    <slot name="after">
      <Icon class="after-icon icon" v-if="props.afterIcon" :icon="props.afterIcon" />
    </slot>

    <!--  MENU -->
    <q-menu class="menu">
      <q-list style="min-width: 100px">
        <template v-for="(menu, iMenu)  in props.menus" v-bind:key="iMenu">
          <q-separator v-if="menu.label === '-'" />
          <q-item v-else clickable v-close-popup>
            <q-item-label class="before" v-if="menu.beforeIcon"><Icon class="before-icon" :icon="menu.beforeIcon" /></q-item-label>
            <q-item-section>{{ menu.label }}</q-item-section>
            <q-item-label class="after" v-if="menu.afterIcon"><Icon class="after-icon" :icon="menu.afterIcon" /></q-item-label>
          </q-item>
        </template>
      </q-list>
    </q-menu>
    <!--  MENU -->

  </q-btn>
</template>

<script setup lang="ts">
import { IJavButton } from 'components/JavComponents/interfaces';

const emit = defineEmits(['click']);

const props = defineProps({
  label: String,
  icon: String,
  beforeIcon: String,
  afterIcon: String,
  legend: String,
  url: String,
  submit: Boolean,
  menus: {
    type: Object,
    default: () => [] as IJavButton[]
  },
})

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
.jav-button {
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
