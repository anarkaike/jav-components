<template>
  <q-form class="jav-form" v-bind="props">

    <!-- FORM - HEADER - TITULO  -->
    <div class="header">
      <h3>{{ props.title ?? 'Título do formulário' }}</h3>
    </div>

    <!-- FORM - CAMPOS -->
    <div class="fields">
      <div
        class="field"
        :class="[{
            'prepend': (field as IJavField)?.icon
          }]"
        v-for="(field, iField) in props.fields" v-bind:key="iField"
        :style="{width: methods.getWidth(field as IJavRegister)}"
      >
        <JavInputOptions v-if="'options' in field" v-bind="field??{}" v-model="formData[iField]"/>
        <JavInput v-else v-bind="field??{}" v-model="formData[iField]" />

        <div class="info" v-if="(field as IJavField)?.info">
          {{ (field as IJavField)?.info }}
          <Icon icon="fluent:info-48-regular" />
        </div>
      </div>
    </div>

    <!-- FORM - RODAPE -->
    <div class="footer">
      <JavButtons :buttons="buttons" submit />
    </div>

    <slot />

  </q-form>
</template>

<script setup lang="ts">
import { EContentSizes } from 'components/JavComponents/enums/EContentSizes';
import { IJavButton, IJavField, IJavForm } from 'components/JavComponents/interfaces';
import { IJavGrid } from 'components/JavComponents/interfaces/IJavGrid';
import { IJavRegister } from 'components/JavComponents/interfaces/IJavRegister';
import { JavButtons } from 'components/JavComponents/JavButton';
import JavInput from 'components/JavComponents/JavInput/JavInput.vue';
import JavInputOptions from 'components/JavComponents/JavInputOptions/JavInputOptions.vue';
import { QForm } from 'quasar';
import { onMounted, Ref, ref } from 'vue';

const props = withDefaults(defineProps<IJavForm>(), {
  data: () => [] as IJavRegister[],
  fields: () => [] as IJavField[],
  buttons: () => [
    {
      label: 'Resetar'
    } as IJavButton,
    {
      label: 'Salvar'
    } as IJavButton
  ] as IJavButton[],
});

const formData: Ref<IJavRegister | any> = ref(props.data);
const buttons: Ref<IJavButton[]> = ref(props?.buttons);

const methods = {
  getWidth (field: IJavField) {
    if (field?.width) {
      return `calc(${field?.width} - 2px)`
    }
    let gridForm: number, gridField: number
    if (typeof field.grid !== 'number') {
      const size: EContentSizes = field?.size ?? EContentSizes.MICRO

      gridForm  = typeof props.grid === 'undefined' ? 6 : ((props.grid as IJavGrid)[size] ?? 6)
      gridField = typeof field.grid === 'undefined' ? 6 : ((field.grid as IJavGrid)[size] ?? 3)
    } else {
      gridField = field.grid ?? 6;
      gridForm = typeof props.grid === 'number' ? props.grid : 6;
    }
    const total = gridForm < gridField ? gridField : gridForm;
    return `calc(${(100 / total) * gridField}% - 2px)`;
  },
  hasOptions (obj: object) {
    return obj && obj.hasOwnProperty('options');
  }
};

onMounted(() => {

});
</script>

<style lang="scss">
// Escopo do componente
.jav-form {
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 2px;
  vertical-align: top;
  min-width: 500px;

  .header {
    h3 {
      background-color: #e7e7e7;
      margin: 0px;
      padding: 5px 10px;
      font-size: 20px;
      font-weight: bold;
      line-height: 1em;

      -webkit-border-top-left-radius: 5px;
      -webkit-border-top-right-radius: 5px;
      -moz-border-radius-topleft: 5px;
      -moz-border-radius-topright: 5px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    padding-bottom: 2px;
  }

  .fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0x -1px;

    .field {
      margin: 1px;
      align-items: stretch;
      max-height: 100%;
      background-color: #ededef;
      border-radius: 5px;

      .q-field--dense .q-field__label {
        font-size: 12px;
        line-height: 1.5em;
        padding-left: 1px;
      }

      .info {
        text-align: right;
        font-size: 0.8em;
        color: rgba(0, 0, 0, 0.5);
        padding: 0px 2px 0px 12px;

        .iconify {
          font-size: 15px;
          margin-bottom: -4px;
        }
      }

      .q-field__control-container {
        z-index: 2;
      }

      .q-field__bottom {
        text-align: right;
        padding-right: 3.9em;
        margin-top: -4.9em;
        margin-bottom: 1.3em;
        position: relative;
        z-index: 0;
      }

      &.prepend {
        .info {
          padding-left: 43px;
        }
      }
    }
  }
  .footer {
    padding-top: 2px;
    text-align: right;
  }
}
.q-field--filled .q-field__control {
  background-color: transparent;
}
</style>
