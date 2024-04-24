<template>
  <q-page class="row items-center justify-evenly">

      <h1>
        Amostras de Cores ⇢
        <a style="cursor: pointer;" @click="activeTheme='light'">Claro</a> •
        <a style="cursor: pointer;" @click="activeTheme='dark'">Escuro</a> •
        <a style="cursor: pointer;" @click="activeTheme='high-contrast'">Alto Contraste</a>
      </h1>

      <div :class="`theme-${activeTheme}`" style="width: 100%; padding:  50px;">
        <div class="dk-bg-primary-5 dk-dark-bg-yellow" style="width: 300px; height:  100px; margin-bottom:  50px; margin-top:  50px;">
          Junio de Almeida Vitorino
        </div>

        <div class="dk-text-green">
          Junio de Almeida Vitorino
        </div>
      </div>

      <div class="amostras">
        <div v-for="(theme, iTheme) in themes" v-bind:key="iTheme" :class="`theme-${theme}`">
          <h2>{{theme.toUpperCase()}} Theme</h2>
          <div v-for="(color, iColor) in colors" v-bind:key="iColor" class="color-variant">
            <div
              v-for="(intensity, iIntensity) in intensities"
              v-bind:key="iIntensity"
              :class="`dk-bg-${color}${intensity?'-'+intensity:''} dk-border-${color}${intensity?'-'+intensity:''}`"
            >
              dk-bg-{{color}}{{intensity?'-'+intensity:''}} •
              <strong>dk-text-{{color}}{{intensity?'-'+intensity:''}}</strong> •
              <i>dk-border-{{color}}{{intensity?'-'+intensity:''}}</i>
            </div>
          </div>
        </div>
      </div>

  </q-page>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const themes = ['light', 'dark', 'high-contrast',];
const intensities = [null, 1,2,3,4,5,];
const colors = ['primary', 'secondary', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan',
  'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'black', 'white', 'blue-grey',]

const activeTheme = ref('');
defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss">

@use 'sass:color';
.theme-dark,
.theme-high-contrast {
  background-color: #000000;
}

h1 {
  margin: 5px 0;
  padding: 0.1em 0.3em;
  font-size:  30px;
  line-height: 100%;
  background-color: #F0F0F0;
  border-radius: 0px;
  width: 100%;
  text-align: center;
}
div.amostras {
  width: 100%;
  display: flex;
  > div {
    width: calc(100% / 3);
    margin: 2px;
    border: 2px solid #E4E4E4;
    border-radius: 15px;
    padding: 2px 30px;
    h2 {
      margin: 0px 0px 10px 0px;
      padding: 0px;
      font-size: 20px;
      line-height: 150%;
      text-align: center;
    }
    &.theme-dark, &.theme-high-contrast {
      background-color: #000;
      color: #FFF;
      h2 {
        color: #FFF;
      }
    }
    > div {
      margin-bottom: 5px;
      border: 1px solid #CCC;
      border-radius: 8px;
      padding: 10px;
      > div {
        padding: 0.2em 0.5em;
        margin-bottom: 10px;
        font-size: 10px;
        text-align: center;
        &:first-of-type {
          -webkit-border-top-left-radius: 5px;
          -webkit-border-top-right-radius: 5px;
          -moz-border-radius-topleft: 5px;
          -moz-border-radius-topright: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        &:last-of-type {-webkit-border-bottom-right-radius: 5px;
          -webkit-border-bottom-left-radius: 5px;
          -moz-border-radius-bottomright: 5px;
          -moz-border-radius-bottomleft: 5px;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          margin-bottom: 0px;
        }
      }
    }
  }
}


$themes: (
  light: (
    defaultLightens: (50%, 40%, 30%, 20%, 10%),
  ),
  dark: (
    defaultDarkens: (40%, 30%, 20%, 10%, 0%)
  ),
  high-contrast: (
    defaultDarkens: (40%, 30%, 20%, 10%, 0%),
    defaultDesaturate: 50%
  ),
);

$themeColors: (
  // Cor principal da marca da empresa
  "primary": (
    light: (
      bg: #BF020A, textInBg: (#000000, 4 ,#FFFFFF), text: #BF020A, border: #BF020A,

      lightens: (58%, 50%, 40%, 20%, 0%), darkens:  (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark: (
      bg: #BF020A, textInBg: (#FFFFFF, 6 ,#000000), text: #BF020A, border: #BF020A,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens:  (32%, 29%, 18%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast: (
      bg: #BF020A, textInBg: (#FFFFFF, 4 ,#000000), text: #BF020A, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens:  (30%, 26%, 17%, 0%, 0%), desaturate: 60%,
    ),
  ),

  // Cor secundária da marca da empresa
  "secondary": (
    light:          (
      bg: #0d6ec3, textInBg: (#000000, 5 ,#FFFFFF), text: #0d6ec3, border: #0d6ec3,

      lightens: (52%, 45%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #0d6ec3, textInBg: (#FFFFFF, 5 ,#000000), text: #0d6ec3, border: #0d6ec3,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (34%, 31%, 22%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #0d6ec3, textInBg: (#FFFFFF, 4 ,#000000), text: #0d6ec3, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (33%, 30%, 22%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "red": (
    light:          (
      bg: #ee1b0a, textInBg: (#000000, 5 ,#FFFFFF), text: #ee1b0a, border: #ee1b0a,

      lightens: (47%, 42%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #ee1b0a, textInBg: (#FFFFFF, 5 ,#000000), text: #ee1b0a, border: #ee1b0a,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (43%, 35%, 22%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #ee1b0a, textInBg: (#FFFFFF, 4 ,#000000), text: #ee1b0a, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (42%, 35%, 22%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "pink": (
    light:          (
      bg: #E91E63, textInBg: (#000000, 5 ,#FFFFFF), text: #E91E63, border: #E91E63,

      lightens: (43%, 35%, 25%, 15%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #E91E63, textInBg: (#FFFFFF, 5 ,#000000), text: #E91E63, border: #E91E63,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (45%, 37%, 28%, 15%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #E91E63, textInBg: (#FFFFFF, 4 ,#000000), text: #E91E63, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (45%, 40%, 28%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "purple": (
    light:          (
      bg: #9c26b0, textInBg: (#000000, 5 ,#FFFFFF), text: #9c26b0, border: #9c26b0,

      lightens: (51%, 43%, 30%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #9c26b0, textInBg: (#FFFFFF, 5 ,#000000), text: #9c26b0, border: #9c26b0,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (33%, 27%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #9c26b0, textInBg: (#FFFFFF, 4 ,#000000), text: #9c26b0, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (33%, 27%, 20%, 0%, 0%), desaturate: 50%,
    ),
  ),

  "deep-purple": (
    light:          (
      bg: #673BB7, textInBg: (#000000, 5 ,#FFFFFF), text: #673BB7, border: #673BB7,

      lightens: (48%, 42%, 32%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #673BB7, textInBg: (#FFFFFF, 5 ,#000000), text: #673BB7, border: #673BB7,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (35%, 30%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #673BB7, textInBg: (#FFFFFF, 4 ,#000000), text: #673BB7, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (35%, 30%, 20%, 0%, 0%), desaturate: 30%,
    ),
  ),

  "indigo": (
    light:          (
      bg: #3F51B5, textInBg: (#000000, 5 ,#FFFFFF), text: #3F51B5, border: #3F51B5,

      lightens: (47%, 41%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #3F51B5, textInBg: (#FFFFFF, 5 ,#000000), text: #3F51B5, border: #3F51B5,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (37%, 30%, 22%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #3F51B5, textInBg: (#FFFFFF, 4 ,#000000), text: #3F51B5, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (37%, 32%, 21%, 0%, 0%), desaturate: 20%,
    ),
  ),

  "blue": (
    light:          (
      bg: #1b79c6, textInBg: (#000000, 5 ,#FFFFFF), text: #1b79c6, border: #1b79c6,

      lightens: (48%, 42%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #1b79c6, textInBg: (#FFFFFF, 5 ,#000000), text: #1b79c6, border: #1b79c6,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (35%, 30%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #1b79c6, textInBg: (#FFFFFF, 4 ,#000000), text: #1b79c6, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (35%, 30%, 20%, 0%, 0%), desaturate: 40%,
    ),
  ),

  "light-blue": (
    light:          (
      bg: #03A9F4, textInBg: (#000000, 5 ,#FFFFFF), text: #03A9F4, border: #03A9F4,

      lightens: (45%, 40%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #03A9F4, textInBg: (#FFFFFF, 5 ,#000000), text: #03A9F4, border: #03A9F4,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (42%, 35%, 25%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #03A9F4, textInBg: (#FFFFFF, 4 ,#000000), text: #03A9F4, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (41%, 35%, 25%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "cyan": (
    light:          (
      bg: #01BCD4, textInBg: (#000000, 6 ,#FFFFFF), text: #01BCD4, border: #01BCD4,

      lightens: (50%, 43%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #01BCD4, textInBg: (#FFFFFF, 5 ,#000000), text: #01BCD4, border: #01BCD4,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (36%, 33%, 25%, 16%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #01BCD4, textInBg: (#FFFFFF, 4 ,#000000), text: #01BCD4, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (35%, 33%, 25%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "teal": (
    light:          (
      bg: #009688, textInBg: (#000000, 5 ,#FFFFFF), text: #009688, border: #009688,

      lightens: (65%, 55%, 35%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #009688, textInBg: (#FFFFFF, 5, #000000), text: #009688, border: #009688,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (25%, 22%, 17%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #009688, textInBg: (#FFFFFF, 4 ,#000000), text: #009688, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (23%, 21%, 17%, 0%, 0%), desaturate: 70%,
    ),
  ),

  "green": (
    light:          (
      bg: #138819, textInBg: (#000000, 5 ,#FFFFFF), text: #138819, border: #138819,

      lightens: (57%, 45%, 30%, 15%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #138819, textInBg: (#FFFFFF, 5 ,#000000), text: #138819, border: #138819,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (25%, 23%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #138819, textInBg: (#FFFFFF, 4 ,#000000), text: #138819, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (25%, 23%, 20%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "light-green": (
    light:          (
      bg: #8BC34A, textInBg: (#000000, 6 ,#FFFFFF), text: #8BC34A, border: #8BC34A,

      lightens: (42%, 32%, 21%, 11%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #8BC34A, textInBg: (#FFFFFF, 4 ,#000000), text: #8BC34A, border: #8BC34A,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (46%, 40%, 30%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #8BC34A, textInBg: (#FFFFFF, 4 ,#000000), text: #8BC34A, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (46%, 40%, 30%, 0%, 0%), desaturate: 30%,
    ),
  ),

  "lime": (
    light:          (
      bg: #CDDC39, textInBg: (#000000, 6 ,#FFFFFF), text: #CDDC39, border: #CDDC39,

      lightens: (39%, 30%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 2%, 5%), desaturate: 0%,
    ),
    dark:           (
      bg: #CDDC39, textInBg: (#FFFFFF, 4 ,#000000), text: #CDDC39, border: #CDDC39,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (47%, 43%, 34%, 20%, 10%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #CDDC39, textInBg: (#FFFFFF, 4 ,#000000), text: #CDDC39, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (47%, 43%, 34%, 0%, 0%), desaturate: 45%,
    ),
  ),

  "yellow": (
    light:          (
      bg: #FFEB3B, textInBg: (#000000, 6 ,#FFFFFF), text: #FFEB3B, border: #FFEB3B,

      lightens: (33%, 27%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #FFEB3B, textInBg: (#FFFFFF, 4 ,#000000), text: #FFEB3B, border: #FFEB3B,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (55%, 45%, 35%, 20%, 10%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #FFEB3B, textInBg: (#FFFFFF, 4 ,#000000), text: #FFEB3B, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (55%, 45%, 35%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "amber": (
    light:          (
      bg: #FFC108, textInBg: (#000000, 6 ,#FFFFFF), text: #FFC108, border: #FFC108,

      lightens: (45%, 35%, 25%, 15%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #FFC108, textInBg: (#FFFFFF, 4 ,#000000), text: #FFC108, border: #FFC108,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (46%, 40%, 27%, 20%, 10%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #FFC108, textInBg: (#FFFFFF, 4 ,#000000), text: #FFC108, border: #FFC108,

      lightens: (0%, 0%, 0%, 25%, 35%), darkens: (45%, 40%, 27%, 0%, 0%), desaturate: 60%,
    ),
  ),

  "orange": (
    light:          (
      bg: #F07000, textInBg: (#000000, 6 ,#FFFFFF), text: #F07000, border: #F07000,

      lightens: (40%, 30%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #F07000, textInBg: (#FFFFFF, 4 ,#000000), text: #F07000, border: #F07000,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (40%, 35%, 25%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #F07000, textInBg: (#FFFFFF, 4 ,#000000), text: #F07000, border: #FFC108,

      lightens: (0%, 0%, 0%, 40%, 50%), darkens: (40%, 35%, 25%, 00%, 0%), desaturate: 50%,
    ),
  ),

  "deep-orange": (
    light:          (
      bg: #CA3B0F, textInBg: (#000000, 5 ,#FFFFFF), text: #CA3B0F, border: #CA3B0F,

      lightens: (40%, 30%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #CA3B0F, textInBg: (#FFFFFF, 5 ,#000000), text: #CA3B0F, border: #CA3B0F,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (35%, 27%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #CA3B0F, textInBg: (#FFFFFF, 4 ,#000000), text: #CA3B0F, border: #FFC108,

      lightens: (0%, 0%, 0%, 40%, 50%), darkens: (35%, 27%, 20%, 0%, 0%), desaturate: 50%,
    ),
  ),

  "brown": (
    light:          (
      bg: #795548, textInBg: (#000000, 5 ,#FFFFFF), text: #795548, border: #795548,

      lightens: (55%, 48%, 38%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #795548, textInBg: (#FFFFFF, 5 ,#000000), text: #795548, border: #795548,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (30%, 27%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #795548, textInBg: (#FFFFFF, 4 ,#000000), text: #795548, border: #FFC108,

      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (30%, 27%, 20%, 10%, 0%), desaturate: 20%,
    ),
  ),

  "grey": (
    light:          (
      bg: #555555, textInBg: (#000000, 5 ,#FFFFFF), text: #555555, border: #555555,

      lightens: (60%, 50%, 30%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #555555, textInBg: (#FFFFFF, 5 ,#000000), text: #555555, border: #555555,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (25%, 22%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #555555, textInBg: (#FFFFFF, 4 ,#000000), text: #555555, border: #FFC108,

      lightens: (0%, 0%, 0%, 40%, 50%), darkens: (25%, 22%, 20%, 0%, 0%), desaturate: 50%,
    ),
  ),

  "black": (
    light:          (
      bg: #000000, textInBg: (#FFFFFF, 6 ,#000000), text: #000000, border: #000000,

      lightens: (28%, 21%, 14%, 7%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #000000, textInBg: (#FFFFFF, 6 ,#000000), text: #000000, border: #000000,

      lightens: (0%, 7%, 9%, 12%, 16%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #000000, textInBg: (#FFFFFF, 4 ,#000000), text: #000000, border: #FFC108,

      lightens: (0%, 7%, 9%, 70%, 80%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 50%,
    ),
  ),

  "white": (
    light:          (
      bg: #FFFFFF, textInBg: (#000000, 6 ,#FFFFFF), text: #FFFFFF, border: #FFFFFF,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (0%, 7%, 14%, 21%, 28%), desaturate: 0%,
    ),
    dark:           (
      bg: #FFFFFF, textInBg: (#FFFFFF, 4 ,#000000), text: #FFFFFF, border: #FFFFFF,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (90%, 80%, 70%, 60%, 50%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #FFFFFF, textInBg: (#FFFFFF, 4 ,#000000), text: #FFFFFF, border: #FFC108,

      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (90%, 80%, 70%, 20%, 10%), desaturate: 50%,
    ),
  ),

  "blue-grey": (
    light:          (
      bg: #607D8B, textInBg: (#000000, 6 ,#FFFFFF), text: #607D8B, border: #607D8B,

      lightens: (50%, 40%, 30%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #607D8B, textInBg: (#FFFFFF, 4 ,#000000), text: #607D8B, border: #607D8B,

      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (37%, 31%, 25%, 15%, 5%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #607D8B, textInBg: (#FFFFFF, 4 ,#000000), text: #607D8B, border: #FFC108,

      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (37%, 31%, 25%, 5%, 0%), desaturate: 5%,
    ),
  ),
);

@function changeColor($color, $colorName, $themeName: 'light', $intisity: null, $variation: 'normal') {
  $colorConfigs:          map-get($themeColors, $colorName);
  $colorConfigByTheme:    map-get($colorConfigs, $themeName);

  $desaturate:            map-get($colorConfigByTheme, 'desaturate');
  $lightens:              map-get($colorConfigByTheme, 'lightens');
  $darkens:               map-get($colorConfigByTheme, 'darkens');

  $themeConfigs:          map-get($themes, $themeName);
  $defaultLightens:       map-get($themeConfigs, 'defaultLightens');
  $defaultDarkens:        map-get($themeConfigs, 'defaultDarkens');
  $defaultDesaturate:     map-get($themeConfigs, 'defaultDesaturate');

  // ACINZAMENTO / DESATURAÇÃO
  @if $desaturate != null and $intisity!=null {
    $color:             desaturate($color, $desaturate);

  }@else if $defaultDesaturate != null and $intisity!=null {
    $color:             desaturate($color, $defaultDesaturate);
  }

  // CLAREAMENTO
  @if $lightens != null and $intisity != null and length($lightens) >= $intisity {
    $color:             lighten($color, nth($lightens, $intisity));

  }@else if $defaultLightens != null and $intisity != null and length($defaultLightens) >= $intisity {
    $color:             lighten($color, nth($defaultLightens, $intisity));
  }

  // ESCURECIMENTO
  @if $darkens != null and $intisity != null and length($darkens) >= $intisity {
    $color:   darken($color, nth($darkens, $intisity));

  }@else if $defaultDarkens != null and $intisity != null and length($defaultDarkens) >= $intisity {
    $color:   darken($color, nth($defaultDarkens, $intisity));
  }

  @return $color;
}

// [GET COLORS FOR BG] • Obtem todas as cores para FUNDOS
@function getBgColor($colorName, $themeName: 'light', $intisity: null, $variation: 'normal') {
  $colorConfigs:          map-get($themeColors, $colorName);
  $colorConfigByTheme:    map-get($colorConfigs, $themeName);

  $bgColor:               map-get($colorConfigByTheme, 'bg');
  $desaturate:            map-get($colorConfigByTheme, 'desaturate');
  $lightens:              map-get($colorConfigByTheme, 'lightens');
  $darkens:               map-get($colorConfigByTheme, 'darkens');

  $themeConfigs:          map-get($themes, $themeName);
  $defaultLightens:       map-get($themeConfigs, 'defaultLightens');
  $defaultDarkens:        map-get($themeConfigs, 'defaultDarkens');
  $defaultDesaturate:     map-get($themeConfigs, 'defaultDesaturate');

  $textInBgColor:             map-get($colorConfigByTheme, 'textInBg');
  @debug $textInBgColor;
  $textInBgColorForBgLight:   nth($textInBgColor, 1);
  $textInBgColorPointChange:  nth($textInBgColor, 2);
  $textInBgColorForBgDark:    nth($textInBgColor, 3);

  // ACINZAMENTO / DESATURAÇÃO
  @if $desaturate != null and $intisity!=null {
    $bgColor:             desaturate($bgColor, $desaturate);

  }@else if $defaultDesaturate != null and $intisity!=null {
    $bgColor:             desaturate($bgColor, $defaultDesaturate);
  }

  // CLAREAMENTO
  @if $lightens != null and $intisity != null and length($lightens) >= $intisity {
    $bgColor:             lighten($bgColor, nth($lightens, $intisity));

  }@else if $defaultLightens != null and $intisity != null and length($defaultLightens) >= $intisity {
    $bgColor:             lighten($bgColor, nth($defaultLightens, $intisity));
  }

  // ESCURECIMENTO
  @if $darkens != null and $intisity != null and length($darkens) >= $intisity {
    $bgColor:   darken($bgColor, nth($darkens, $intisity));

  }@else if $defaultDarkens != null and $intisity != null and length($defaultDarkens) >= $intisity {
    $bgColor:   darken($bgColor, nth($defaultDarkens, $intisity));
  }


  @if $variation == 'hover' and $intisity!=null {
    $bgColor: if(
        $themeName == 'light',
        if(
            $intisity <= $textInBgColorPointChange,
            darken(saturate($bgColor, 10%), 10%),
            lighten(saturate($bgColor, 20%),20%)
        ),
        if(
            $intisity <= $textInBgColorPointChange,
            lighten(saturate($bgColor, 10%), 10%),
            darken(saturate($bgColor, 20%),20%)
        )
    )
  }

  // SATURAÇÃO
  @if $desaturate != null and $intisity!=null {
    $textColorForBgLight: desaturate($textInBgColorForBgLight, $desaturate);
    $textColorForBgDark:  desaturate($textInBgColorForBgDark, $desaturate);

  }@else if $defaultDesaturate != null and $intisity!=null {
    $textColorForBgLight: desaturate($textColorForBgLight, $defaultDesaturate);
    $textColorForBgDark:  desaturate($textColorForBgDark, $defaultDesaturate);
  }

  $textInBgColor: if($intisity!=null and $intisity >= $textInBgColorPointChange, $textInBgColorForBgDark, $textInBgColorForBgLight);

  @if $variation == 'hover' {
    $textColor: lighten(saturate($textInBgColor, 20%),20%);
  }

  @return $bgColor, $textInBgColor;
}

// [GET COLORS FOR TEXT] • Obtem todas as cores para TEXTOS
@function getTextColor($colorName, $themeName: 'light', $intisity: null, $variation: 'normal') {
  $colorConfigs:          map-get($themeColors, $colorName);
  $colorConfigByTheme:    map-get($colorConfigs, $themeName);

  $themeConfigs:          map-get($themes, $themeName);
  $defaultDesaturate:     map-get($themeConfigs, 'defaultDesaturate');

  $desaturate:            map-get($colorConfigByTheme, 'desaturate');
  $textColor:             map-get($colorConfigByTheme, 'text');

  // SATURAÇÃO
  @if $desaturate != null and $intisity!=null {
    $textColor: desaturate($textColor, $desaturate);

  }@else if $defaultDesaturate != null and $intisity!=null {
    $textColor: desaturate($textColor, $defaultDesaturate);
  }

  //$textColor: if($intisity!=null and $intisity >= $textColorPointChange, $textColorForBgDark, $textColorForBgLight);

  @if $variation == 'hover' {
    $textColor: lighten(saturate($textColor, 20%),20%);
  }

  @return $textColor;
}


// [GET COLORS FOR BORDER] • Obtem todas as cores para BORDAS
@function getBorderColor($colorName, $themeName: 'light', $intisity: null, $variation: 'normal') {
  $colorConfigs:          map-get($themeColors, $colorName);
  $colorConfigByTheme:    map-get($colorConfigs, $themeName);

  $themeConfigs:          map-get($themes, $themeName);
  $defaultDesaturate:     map-get($themeConfigs, 'defaultDesaturate');
  $defaultLightens:       map-get($themeConfigs, 'defaultLightens');
  $defaultDarkens:        map-get($themeConfigs, 'defaultDarkens');
  $defaultDesaturate:     map-get($themeConfigs, 'defaultDesaturate');

  $desaturate:            map-get($colorConfigByTheme, 'desaturate');
  $borderColor:           map-get($colorConfigByTheme, 'border');
  $lightens:              map-get($colorConfigByTheme, 'lightens');
  $darkens:               map-get($colorConfigByTheme, 'darkens');
  $textColor:             map-get($colorConfigByTheme, 'textInBg');
  $textColorPointChange:  nth($textColor, 2);

  // SATURAÇÃO
  @if $desaturate != null and $themeName != 'high-contrast' {
    $borderColor:         desaturate($borderColor, $desaturate);

  }@else if $defaultDesaturate != null and $themeName != 'high-contrast' {
    $borderColor:         desaturate($borderColor, $defaultDesaturate);
  }


  // ----------------- Ajustante cor da borda
  $adjustedBorderColor: $borderColor;
  @if $themeName == 'light' and $intisity!=null {
    $borderColor: if(
      $intisity >= $textColorPointChange,
      darken(lighten($borderColor, 70% - $intisity * 14%), 50%),
      darken(lighten($borderColor, 70% - $intisity * 14%), 10%)
    );

  }@else if $themeName == 'dark' and $intisity!=null {
    $borderColor: if(
        $intisity >= $textColorPointChange,
        darken(lighten($borderColor, 100% - $intisity * 10%), 5%),
        darken(lighten($borderColor, 70% - $intisity * 14%), 50%)
    );
  }

  @if $variation == 'hover' and $intisity!=null {
    $borderColor: if(
        $intisity >= $textColorPointChange,
        lighten(saturate($borderColor, 10%),20%),
        lighten(saturate($borderColor, 10%),10%)
    );
  }

  @return $borderColor;
}


// [GET COLORS] • Obtem todas as cores para fundo, texto e bordas
@function getColors($colorName, $themeName: 'light', $intisity: null) {
  $bgColorNormal: getBgColor($colorName, $themeName, $intisity);
  $bgColorHover:  getBgColor($colorName, $themeName, $intisity, 'hover');
  @return (
    bgColor:      (
      normal: nth($bgColorNormal, 1),
      hover:  nth($bgColorHover, 1),
    ),
    textInBgColor:      (
      normal: nth($bgColorNormal, 2),
      hover:  nth($bgColorHover, 2),
    ),
    textColor:    (
      normal: getTextColor($colorName, $themeName, $intisity),
      hover:  getTextColor($colorName, $themeName, $intisity, 'hover'),
    ),
    borderColor:  (
      normal: getBorderColor($colorName, $themeName, $intisity),
      hover:  getBorderColor($colorName, $themeName, $intisity, 'hover'),
    )
  )
}



// [CSS SELECTOR] • Gera todos os seletores necessários usados na geração das classes
@function getClassSelector($colorName, $themeName, $prefixClass, $intisity: null, $specificTheme: false) {
  $bodyThemeString: '';
  $themeString: '';

  $rootBodySelector:       if($themeName=='light', null, "body[theme=\"#{$themeName}\"]");
  $rootThemeClassSelector: if($themeName=='light', null, ".theme-#{$themeName}");

  @if $specificTheme == true {
    $bodyThemeString: if(
        $intisity != null,
        "#{$rootBodySelector} .dk-#{$themeName}-#{$prefixClass}-#{$colorName}-#{$intisity}",
        "#{$rootBodySelector} .dk-#{$themeName}-#{$prefixClass}-#{$colorName}");

    $themeString: if(
        $intisity != null,
        "#{$rootThemeClassSelector} .dk-#{$themeName}-#{$prefixClass}-#{$colorName}-#{$intisity}",
        "#{$rootThemeClassSelector} .dk-#{$themeName}-#{$prefixClass}-#{$colorName}"
    );

  }@else {
    $bodyThemeString: if(
        $intisity != null,
        "#{$rootBodySelector} .dk-#{$prefixClass}-#{$colorName}-#{$intisity}",
        "#{$rootBodySelector} .dk-#{$prefixClass}-#{$colorName}");

    $themeString: if(
        $intisity != null,
        "#{$rootThemeClassSelector} .dk-#{$prefixClass}-#{$colorName}-#{$intisity}",
        "#{$rootThemeClassSelector} .dk-#{$prefixClass}-#{$colorName}"
    );
  }

  @return $bodyThemeString, $themeString;
}

// [BG COLOR GENERATE CLASS] • Gera todas as classes de estilos para fundos
@mixin createClassBgColors($themeName, $colorName, $intisity, $bgColor, $textColor, $specificTheme) {
  $selectors: getClassSelector($colorName, $themeName, 'bg', $intisity, $specificTheme);
  @each $selector in $selectors {
    @at-root #{$selector} {
      background-color:     map-get($bgColor, 'normal')   if($specificTheme,!important,null);
      color:                map-get($textColor, 'normal') if($specificTheme,!important,null);
      fill:                 map-get($textColor, 'normal') if($specificTheme,!important,null);
      &:hover {
        background-color:   map-get($bgColor, 'hover')    if($specificTheme,!important,null);
      }
    }
  }
}

// [TEXT COLOR GENERATE CLASS] • Gera todas as classes de estilos para textos
@mixin createClassTextColors($themeName, $colorName, $intisity, $textColor, $specificTheme) {
  $selectors: getClassSelector($colorName, $themeName, 'text', $intisity, $specificTheme);
  @each $selector in $selectors {
    @at-root #{$selector} {
      color:    map-get($textColor, 'normal') if($specificTheme,!important,null);
      fill:     map-get($textColor, 'normal') if($specificTheme,!important,null);
      &:hover {
        color:  map-get($textColor, 'hover')  if($specificTheme,!important,null);
        fill:   map-get($textColor, 'hover')  if($specificTheme,!important,null);
      }
    }
  }
}

// [BORDER COLOR GENERATE CLASS] • Gera todas as classes de estilos para borda
@mixin createClassBorderColors($themeName, $colorName, $intisity, $borderColor, $specificTheme) {
  $selectors: getClassSelector($colorName, $themeName, 'border', $intisity, $specificTheme);
  @each $selector in $selectors {
    @at-root #{$selector} {
      border:   1px solid map-get($borderColor, 'normal') if($specificTheme,!important,null);

      &:hover {
        border: 1px solid map-get($borderColor, 'hover')  if($specificTheme,!important,null);
      }
    }
  }
}

// [CREATE ALL CLASSES FOR COLORS] • Cria todas as classes e suas variações para fundos, textos e bordas
@mixin createClassThemeColors($themeName, $colorName, $intisity, $bgColor, $textInBgColor, $textColor, $borderColor) {
  @include createClassBgColors($themeName, $colorName, $intisity, $bgColor, $textInBgColor, false);
  @include createClassBgColors($themeName, $colorName, $intisity, $bgColor, $textInBgColor, true);

  @include createClassTextColors($themeName, $colorName, $intisity, $textColor, false);
  @include createClassTextColors($themeName, $colorName, $intisity, $textColor, true);

  @include createClassBorderColors($themeName, $colorName, $intisity, $borderColor, false);
  @include createClassBorderColors($themeName, $colorName, $intisity, $borderColor, true);
}

// Percorrendo os temas light, dark e higth constrast
@each $themeName, $themeConfigs in $themes {

  // Percorrendo todas as cores
  @each $colorName, $colorConfigs in $themeColors {
    $defaultColors: getColors($colorName, $themeName);

    // Gerando classes SEM intensidade. Ex.: dk-bg-red, dk-bg-yellow, dk-bg-primary, dk-bg-secondary
    @include createClassThemeColors(
        $themeName, $colorName, null,
        map-get($defaultColors, 'bgColor'),
        map-get($defaultColors, 'textInBgColor'),
        map-get($defaultColors, 'textColor'),
        map-get($defaultColors, 'borderColor')
    );

    // Gerando 5 tonalidades para cada cor para cada tema
    @for $intisity from 1 through 5 {
      $colors: getColors($colorName, $themeName, $intisity);

      // Gerando classes COM intensidade. Ex.: dk-bg-red-1, dk-bg-yellow-3, dk-bg-primary-5, dk-bg-secondary-2
      @include createClassThemeColors(
          $themeName, $colorName, $intisity,
          map-get($colors, 'bgColor'),
          map-get($colors, 'textInBgColor'),
          map-get($colors, 'textColor'),
          map-get($colors, 'borderColor')
      );

    }
  }
}

</style>
