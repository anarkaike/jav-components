<template>
  <q-page class="row items-center justify-evenly">

      <h1>Amostras de Cores</h1>
      <div class="amostras">
        <div v-for="(theme, iTheme) in themes" v-bind:key="iTheme" :class="`theme-${theme}`">
          <h2>{{theme.toUpperCase()}} Theme</h2>
          <div v-for="(color, iColor) in colors" v-bind:key="iColor" class="color-variant">
            <div
              v-for="(intensity, iIntensity) in intensities"
              v-bind:key="iIntensity"
              :class="`bg-${color}-${intensity} border-${color}-${intensity}`"
            >
              bg-{{color}}-{{intensity}} •
              <strong>text-{{color}}-{{intensity}}</strong> •
              <i>border-{{color}}-{{intensity}}</i>
            </div>
          </div>
        </div>
      </div>

  </q-page>
</template>

<script setup lang="ts">

const themes = ['light', 'dark', 'high-contrast',];
const intensities = [1,2,3,4,5,];
const colors = ['primary', 'secondary', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan',
  'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'black', 'white', 'blue-grey',]

defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss">
@use 'sass:color';

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
      bg: #BF020A, text: (#000000, 4 ,#FFFFFF), border: #BF020A,
      lightens: (58%, 50%, 40%, 20%, 0%), darkens:  (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark: (
      bg: #BF020A, text: (#FFFFFF, 5 ,#000000), border: #BF020A,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens:  (32%, 29%, 18%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast: (
      bg: #BF020A, text: (#FFFFFF, 4 ,#000000), border: #BF020A,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens:  (30%, 26%, 17%, 15%, 0%), desaturate: 70%,
    ),
  ),

  // Cor secundária da marca da empresa
  "secondary": (
    light:          (
      bg: #0d6ec3, text: (#000000, 5 ,#FFFFFF), border: #0d6ec3,
      lightens: (52%, 45%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #0d6ec3, text: (#FFFFFF, 5 ,#000000), border: #0d6ec3,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (34%, 31%, 22%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #0d6ec3, text: (#FFFFFF, 4 ,#000000), border: #0d6ec3,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (33%, 30%, 22%, 15%, 0%), desaturate: 70%,
    ),
  ),

  "red": (
    light:          (
      bg: #ee1b0a, text: (#000000, 5 ,#FFFFFF), border: #ee1b0a,
      lightens: (47%, 42%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #ee1b0a, text: (#FFFFFF, 5 ,#000000), border: #ee1b0a,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (43%, 35%, 22%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #ee1b0a, text: (#FFFFFF, 4 ,#000000), border: #ee1b0a,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (42%, 35%, 22%, 15%, 0%), desaturate: 70%,
    ),
  ),

  "pink": (
    light:          (
      bg: #E91E63, text: (#000000, 5 ,#FFFFFF), border: #E91E63,
      lightens: (43%, 35%, 25%, 15%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #E91E63, text: (#FFFFFF, 5 ,#000000), border: #E91E63,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (45%, 37%, 28%, 15%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #E91E63, text: (#FFFFFF, 4 ,#000000), border: #E91E63,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (45%, 40%, 28%, 15%, 0%), desaturate: 60%,
    ),
  ),

  "purple": (
    light:          (
      bg: #9c26b0, text: (#000000, 5 ,#FFFFFF), border: #9c26b0,
      lightens: (51%, 43%, 30%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #9c26b0, text: (#FFFFFF, 5 ,#000000), border: #9c26b0,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (33%, 27%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #9c26b0, text: (#FFFFFF, 4 ,#000000), border: #9c26b0,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (33%, 27%, 20%, 10%, 0%), desaturate: 50%,
    ),
  ),

  "deep-purple": (
    light:          (
      bg: #673BB7, text: (#000000, 5 ,#FFFFFF), border: #673BB7,
      lightens: (48%, 42%, 32%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #673BB7, text: (#FFFFFF, 5 ,#000000), border: #673BB7,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (35%, 30%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #673BB7, text: (#FFFFFF, 4 ,#000000), border: #673BB7,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (35%, 30%, 20%, 10%, 0%), desaturate: 30%,
    ),
  ),

  "indigo": (
    light:          (
      bg: #3F51B5, text: (#000000, 5 ,#FFFFFF), border: #3F51B5,
      lightens: (47%, 41%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #3F51B5, text: (#FFFFFF, 5 ,#000000), border: #3F51B5,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (37%, 30%, 22%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #3F51B5, text: (#FFFFFF, 4 ,#000000), border: #3F51B5,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (37%, 32%, 21%, 12%, 5%), desaturate: 20%,
    ),
  ),

  "blue": (
    light:          (
      bg: #1b79c6, text: (#000000, 5 ,#FFFFFF), border: #1b79c6,
      lightens: (48%, 42%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #1b79c6, text: (#FFFFFF, 5 ,#000000), border: #1b79c6,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (35%, 30%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #1b79c6, text: (#FFFFFF, 4 ,#000000), border: #1b79c6,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (35%, 30%, 20%, 10%, 0%), desaturate: 40%,
    ),
  ),

  "light-blue": (
    light:          (
      bg: #03A9F4, text: (#000000, 5 ,#FFFFFF), border: #03A9F4,
      lightens: (45%, 40%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #03A9F4, text: (#FFFFFF, 5 ,#000000), border: #03A9F4,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (42%, 35%, 25%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #03A9F4, text: (#FFFFFF, 4 ,#000000), border: #03A9F4,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (41%, 35%, 25%, 10%, 0%), desaturate: 60%,
    ),
  ),

  "cyan": (
    light:          (
      bg: #01BCD4, text: (#000000, 6 ,#FFFFFF), border: #01BCD4,
      lightens: (50%, 43%, 35%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #01BCD4, text: (#FFFFFF, 5 ,#000000), border: #01BCD4,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (36%, 33%, 25%, 16%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #01BCD4, text: (#FFFFFF, 4 ,#000000), border: #01BCD4,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (35%, 33%, 25%, 16%, 0%), desaturate: 70%,
    ),
  ),

  "teal": (
    light:          (
      bg: #009688, text: (#000000, 5 ,#FFFFFF), border: #009688,
      lightens: (65%, 55%, 35%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #009688, text: (#FFFFFF, 5, #000000), border: #009688,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (25%, 22%, 17%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #009688, text: (#FFFFFF, 4 ,#000000), border: #009688,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (23%, 21%, 17%, 12%, 0%), desaturate: 80%,
    ),
  ),

  "green": (
    light:          (
      bg: #138819, text: (#000000, 5 ,#FFFFFF), border: #138819,
      lightens: (57%, 45%, 30%, 15%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #138819, text: (#FFFFFF, 5 ,#000000), border: #138819,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (25%, 23%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #138819, text: (#FFFFFF, 4 ,#000000), border: #138819,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (25%, 23%, 20%, 10%, 0%), desaturate: 60%,
    ),
  ),

  "light-green": (
    light:          (
      bg: #8BC34A, text: (#000000, 6 ,#FFFFFF), border: #8BC34A,
      lightens: (42%, 32%, 21%, 11%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #8BC34A, text: (#FFFFFF, 4 ,#000000), border: #8BC34A,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (46%, 40%, 30%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #8BC34A, text: (#FFFFFF, 4 ,#000000), border: #8BC34A,
      lightens: (0%, 0%, 0%, 10%, 20%), darkens: (46%, 40%, 30%, 10%, 0%), desaturate: 30%,
    ),
  ),

  "lime": (
    light:          (
      bg: #CDDC39, text: (#000000, 6 ,#FFFFFF), border: #CDDC39,
      lightens: (39%, 30%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 2%, 5%), desaturate: 0%,
    ),
    dark:           (
      bg: #CDDC39, text: (#FFFFFF, 4 ,#000000), border: #CDDC39,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (47%, 43%, 34%, 20%, 10%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #CDDC39, text: (#FFFFFF, 4 ,#000000), border: #CDDC39,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (47%, 43%, 34%, 20%, 10%), desaturate: 45%,
    ),
  ),

  "yellow": (
    light:          (
      bg: #FFEB3B, text: (#000000, 6 ,#FFFFFF), border: #FFEB3B,
      lightens: (33%, 27%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #FFEB3B, text: (#FFFFFF, 4 ,#000000), border: #FFEB3B,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (55%, 45%, 35%, 20%, 10%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #FFEB3B, text: (#FFFFFF, 4 ,#000000), border: #FFEB3B,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (55%, 45%, 35%, 20%, 10%), desaturate: 80%,
    ),
  ),

  "amber": (
    light:          (
      bg: #FFC108, text: (#000000, 6 ,#FFFFFF), border: #FFC108,
      lightens: (45%, 35%, 25%, 15%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #FFC108, text: (#FFFFFF, 4 ,#000000), border: #FFC108,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (46%, 40%, 27%, 20%, 10%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #FFC108, text: (#FFFFFF, 4 ,#000000), border: #FFC108,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (45%, 40%, 27%, 20%, 10%), desaturate: 70%,
    ),
  ),

  "orange": (
    light:          (
      bg: #F07000, text: (#000000, 6 ,#FFFFFF), border: #F07000,
      lightens: (40%, 30%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #F07000, text: (#FFFFFF, 4 ,#000000), border: #F07000,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (40%, 35%, 25%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #F07000, text: (#FFFFFF, 4 ,#000000), border: #F07000,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (40%, 35%, 25%, 10%, 0%), desaturate: 50%,
    ),
  ),

  "deep-orange": (
    light:          (
      bg: #CA3B0F, text: (#000000, 5 ,#FFFFFF), border: #CA3B0F,
      lightens: (40%, 30%, 20%, 10%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #CA3B0F, text: (#FFFFFF, 5 ,#000000), border: #CA3B0F,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (35%, 27%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #CA3B0F, text: (#FFFFFF, 4 ,#000000), border: #CA3B0F,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (35%, 27%, 20%, 10%, 0%), desaturate: 50%,
    ),
  ),

  "brown": (
    light:          (
      bg: #795548, text: (#000000, 5 ,#FFFFFF), border: #795548,
      lightens: (55%, 48%, 38%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #795548, text: (#FFFFFF, 5 ,#000000), border: #795548,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (30%, 27%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #795548, text: (#FFFFFF, 4 ,#000000), border: #795548,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (30%, 27%, 20%, 10%, 0%), desaturate: 50%,
    ),
  ),

  "grey": (
    light:          (
      bg: #555555, text: (#000000, 5 ,#FFFFFF), border: #555555,
      lightens: (60%, 50%, 30%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #555555, text: (#FFFFFF, 5 ,#000000), border: #555555,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (25%, 22%, 20%, 10%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #555555, text: (#FFFFFF, 4 ,#000000), border: #555555,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (25%, 22%, 20%, 10%, 0%), desaturate: 50%,
    ),
  ),

  "black": (
    light:          (
      bg: #000000, text: (#FFFFFF, 6 ,#000000), border: #000000,
      lightens: (28%, 21%, 14%, 7%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #000000, text: (#FFFFFF, 6 ,#000000), border: #000000,
      lightens: (0%, 7%, 9%, 12%, 16%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #000000, text: (#FFFFFF, 6 ,#000000), border: #000000,
      lightens: (0%, 7%, 9%, 12%, 16%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 50%,
    ),
  ),

  "white": (
    light:          (
      bg: #FFFFFF, text: (#000000, 6 ,#FFFFFF), border: #FFFFFF,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (0%, 7%, 14%, 21%, 28%), desaturate: 0%,
    ),
    dark:           (
      bg: #FFFFFF, text: (#FFFFFF, 4 ,#000000), border: #FFFFFF,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (90%, 80%, 70%, 60%, 50%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #FFFFFF, text: (#FFFFFF, 4 ,#000000), border: #FFFFFF,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (90%, 80%, 70%, 60%, 50%), desaturate: 50%,
    ),
  ),

  "blue-grey": (
    light:          (
      bg: #607D8B, text: (#000000, 6 ,#FFFFFF), border: #607D8B,
      lightens: (50%, 40%, 30%, 20%, 0%), darkens: (0%, 0%, 0%, 0%, 0%), desaturate: 0%,
    ),
    dark:           (
      bg: #607D8B, text: (#FFFFFF, 4 ,#000000), border: #607D8B,
      lightens: (0%, 0%, 0%, 0%, 0%), darkens: (37%, 31%, 25%, 15%, 5%), desaturate: 0%,
    ),
    high-contrast:  (
      bg: #607D8B, text: (#FFFFFF, 4 ,#000000), border: #607D8B,
      lightens: (0%, 0%, 0%, 20%, 30%), darkens: (37%, 31%, 25%, 15%, 5%), desaturate: 5%,
    ),
  ),
);

@function apply-saturation($color, $desaturate) {
  @if $desaturate != null {
    $color: desaturate($color, $desaturate);
  }
  @return $color;
}

// COR FUNDO • Função sass para obter a cor para o fundo baseado no nome da cor, tema, intensidade e variação
@function getBgColor($colorName, $themeName: 'light', $intisity: 1, $variation: 'normal') {
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

  $textColor:             map-get($colorConfigByTheme, 'text');
  $textColorForBgLight:   nth($textColor, 1);
  $textColorPointChange:  nth($textColor, 2);
  $textColorForBgDark:    nth($textColor, 3);

  // ACINZAMENTO / DESATURAÇÃO
  @if $desaturate != null {
    $bgColor:             desaturate($bgColor, $desaturate);

  }@else if $defaultDesaturate != null {
    $bgColor:             desaturate($bgColor, $defaultDesaturate);
  }

  // CLAREAMENTO
  @if $lightens != null and length($lightens) >= $intisity {
    $bgColor:             lighten($bgColor, nth($lightens, $intisity));

  }@else if $defaultLightens != null and length($defaultLightens) >= $intisity {
    $bgColor:             lighten($bgColor, nth($defaultLightens, $intisity));
  }

  // ESCURECIMENTO
  @if $darkens != null and length($darkens) >= $intisity {
    $bgColor:   darken($bgColor, nth($darkens, $intisity));

  }@else if $defaultDarkens != null and length($defaultDarkens) >= $intisity {
    $bgColor:   darken($bgColor, nth($defaultDarkens, $intisity));
  }


  @if $variation == 'hover' {
    $bgColor: if(
        $themeName == 'light',
        if(
            $intisity <= $textColorPointChange,
            darken(saturate($bgColor, 10%), 10%),
            lighten(saturate($bgColor, 20%),20%)
        ),
        if(
            $intisity <= $textColorPointChange,
            lighten(saturate($bgColor, 10%), 10%),
            darken(saturate($bgColor, 20%),20%)
        )
    )
  }

  @return $bgColor;
}

// COR TEXTO • Função sass para obter a cor para o texto baseado no nome da cor, tema, intensidade e variação
@function getTextColor($colorName, $themeName: 'light', $intisity: 1, $variation: 'normal') {
  $colorConfigs:          map-get($themeColors, $colorName);
  $colorConfigByTheme:    map-get($colorConfigs, $themeName);

  $themeConfigs:          map-get($themes, $themeName);
  $defaultDesaturate:     map-get($themeConfigs, 'defaultDesaturate');

  $desaturate:            map-get($colorConfigByTheme, 'desaturate');
  $textColor:             map-get($colorConfigByTheme, 'text');
  $textColorForBgLight:   nth($textColor, 1);
  $textColorPointChange:  nth($textColor, 2);
  $textColorForBgDark:    nth($textColor, 3);

  // SATURAÇÃO
  @if $desaturate != null {
    $textColorForBgLight: desaturate($textColorForBgLight, $desaturate);
    $textColorForBgDark:  desaturate($textColorForBgDark, $desaturate);

  }@else if $defaultDesaturate != null {
    $textColorForBgLight: desaturate($textColorForBgLight, $defaultDesaturate);
    $textColorForBgDark:  desaturate($textColorForBgDark, $defaultDesaturate);
  }

  $textColor: if($intisity >= $textColorPointChange, $textColorForBgDark, $textColorForBgLight);

  @if $variation == 'hover' {
    $textColor: lighten(saturate($textColor, 20%),20%);
  }

  @return $textColor;
}


// COR BORDA • Função Sass para obter as cores para a borda baseado no nome da cor, tema, intensidade e variação
@function getBorderColor($colorName, $themeName: 'light', $intisity: 1, $variation: 'normal') {
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
  $textColor:             map-get($colorConfigByTheme, 'text');
  $textColorPointChange:  nth($textColor, 2);

  // SATURAÇÃO
  @if $desaturate != null {
    $borderColor:         desaturate($borderColor, $desaturate);

  }@else if $defaultDesaturate != null {
    $borderColor:         desaturate($borderColor, $defaultDesaturate);
  }


  // ----------------- Ajustante cor da borda
  $adjustedBorderColor: $borderColor;
  @if $themeName == 'light' {
    $borderColor: if(
      $intisity >= $textColorPointChange,
      darken(lighten($borderColor, 70% - $intisity * 14%), 50%),
      darken(lighten($borderColor, 70% - $intisity * 14%), 10%)
    );
  }@else {
    $borderColor: if(
        $intisity >= $textColorPointChange,
        darken(lighten($borderColor, 100% - $intisity * 10%), 5%),
        darken(lighten($borderColor, 70% - $intisity * 14%), 50%)
    );
  }

  @if $variation == 'hover' {
    $borderColor: if(
        $intisity >= $textColorPointChange,
        lighten(saturate($borderColor, 10%),20%),
        lighten(saturate($borderColor, 10%),10%)
    );
  }

  @return $borderColor;
}

// CORES FUNDO, TEXTO E BORDA • Função Sass para retornar todas as cores de fundo, texto e borda e suas variações,
// baseando o nome da cor, tema e intensidade
@function getColors($colorName, $themeName: 'light', $intisity: 1) {
  @return (
    bgColor:      (
      normal: getBgColor($colorName, $themeName, $intisity),
      hover:  getBgColor($colorName, $themeName, $intisity, 'hover'),
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


// Percorrendo os temas light, dark e higth constrast
@each $themeName, $themeConfigs in $themes {

  // Percorrendo todas as cores
  @each $colorName, $colorConfigs in $themeColors {

    // Gerando 5 tonalidades para cada cor para cada tema
    @for $intisity from 1 through 5 {

      // Buscando cores levando em consideração cor, tema e intensidade
      $colors: getColors($colorName, $themeName, $intisity);
      $bgColor:      map-get($colors, 'bgColor');
      $textColor:    map-get($colors, 'textColor');
      $borderColor:  map-get($colors, 'borderColor');

      // COR FUNDO • Criando classes CSS dinamicamente com as cores para os fundos
      body[theme="#{$themeName}"] .bg-#{$colorName}-#{$intisity}, .theme-#{$themeName} .bg-#{$colorName}-#{$intisity} {
        background-color: map-get($bgColor, 'normal') !important;
        color:            map-get($textColor, 'normal');

        &:hover { background-color:   map-get($bgColor, 'hover'); }
      }

      // COR TEXTO • Criando classes CSS dinamicamente com as cores para os textos
      body[theme="#{$themeName}"] .text-#{$colorName}-#{$intisity}, body[theme="#{$themeName}"] .text-#{$colorName}-#{$intisity} *,
      .theme-#{$themeName} .text-#{$colorName}-#{$intisity}, .theme-#{$themeName} .text-#{$colorName}-#{$intisity} * {
        color:    map-get($textColor, 'normal');
        &:hover { color: map-get($textColor, 'hover'); }
      }

      // COR BORDA • Criando classes CSS dinamicamente com as cores para as bordas
      body[theme="#{$themeName}"] .border-#{$colorName}-#{$intisity}, .theme-#{$themeName} .border-#{$colorName}-#{$intisity}{
        border:         2px solid map-get($borderColor, 'normal') !important;
        &:hover { border: 2px solid map-get($borderColor, 'hover') !important; }
      }
    }
  }
}

</style>
