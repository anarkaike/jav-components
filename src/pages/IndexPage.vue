<template>
  <q-page class="row items-center justify-evenly">
    <div style="height: 800px; margin-top: 20px;">
      <JavForm :fields="fields" />

      Botão:<br><br>

      <div class="backdrop-has" :class="{'opened': formOpened}"></div>
      <q-btn push color="primary" label="Formulário em modal">
        <q-popup-proxy has-backdrop v-model="formOpened">
          <q-card style="max-width: 500px;">
            <JavForm :fields="fields" />
          </q-card>
        </q-popup-proxy>
      </q-btn>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { EInputOptionsTypes } from 'components/JavComponents/enums';
import { IJavField, IJavOption } from 'components/JavComponents/interfaces';
import JavForm from 'components/JavComponents/JavForm/JavForm.vue';
import { ref } from 'vue';

const formOpened = ref(false);
const fields = [
  {
    name: 'id',
    visible: false
  } as IJavField,
  {
    name: 'first_name',
    label: 'Primeiro Nome:',
    icon: 'ph:user',
    info: 'Este nome do meio não é obrigatório, por tanto não precisa preencher.',
    grid: 3,
    rules: [
      (value: any) => value != '' || 'Obrigatório'
    ]
  } as IJavField,
  {
    name: 'middle_name',
    label: 'Nome do Meio:',
    info: 'Este nome do meio não é obrigatório, por tanto não precisa preencher.',
    width: '50%',
    rules: [
      (value: any) => value != '' || 'Obrigatório'
    ]
  } as IJavField,
  {
    name: 'last_name',
    label: 'Último Nome:',
    grid: 2,
    rules: [
      (value: any) => value != '' || 'Obrigatório'
    ]
  } as IJavField,
  {
    name: 'email',
    label: 'Email:',
    icon: 'mdi-light:email-open',
    grid: 2,
    rules: [
      (value: any) => value != '' || 'Obrigatório'
    ]
  } as IJavField,
  {
    name: 'cpf',
    label: 'CPF:',
    grid: 2,
    rules: [
      (value: any) => value != '' || 'Obrigatório'
    ]
  } as IJavField,
  {
    name: 'status',
    label: 'Status:',
    grid: {
      default: 1,
      micro: 16
    },
    type: EInputOptionsTypes.INPUT_RADIO,
    info: 'Escolha uma das opções.',
    options: [
      { value: 'a', label: 'A' } as IJavOption,
      { value: 'b', label: 'B' } as IJavOption,
      { value: 'c', label: 'C' } as IJavOption,
      { value: 'd', label: 'D' } as IJavOption,
      { value: 'e', label: 'E' } as IJavOption
    ] as IJavOption[],
    rules: [
      (value: any) => value != '' || 'Obrigatório'
    ]
  } as IJavField
] as IJavField[];

defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss">
.backdrop-has {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  opacity:  0;
  transition: opacity 0.5s linear;
  transform: scale(0);
  &.opened {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
