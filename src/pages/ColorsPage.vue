<template>
  <q-page class="row items-center justify-evenly">



      <h1>Amostras de Cores</h1>
      <div class="amostras">
        <div v-for="(theme, iTheme) in themes" v-bind:key="iTheme" :class="`theme-${theme}`">
          <h2>{{theme.toUpperCase()}} Theme</h2>
          <div v-for="(color, iColor) in colors" v-bind:key="iColor" class="color-variant">
            <div v-for="(intensity, iIntensity) in intensities" v-bind:key="iIntensity" :class="`bg-${color}-${intensity}`">
              bg-{{color}}-{{intensity}}
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
  'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey',]

defineOptions({
  name: 'IndexPage'
});
</script>





<style lang="scss">
@use 'sass:color';
$themes: (
  light: (
    defaultLightens: (10%, 20%, 30%, 40%, 50%)
  ),
  dark: (
    defaultDarkens: (10%, 20%, 30%, 40%, 50%)
  ),
  high-contrast: (
    defaultDarkens: (10%, 20%, 30%, 40%, 50%)
  ),
);

$themeColors: (
  "primary": (
    light:          ( bg: #BF020A, text: #000000, border: #94030a, lightens: (60%, 50%, 40%, 20%, 0%),  ),
    dark:           ( bg: #650409, text: #FFFFFF, border: #590408, lightens: (25%,  30%, 5%,  10%, 10%), ),
    high-contrast:  ( bg: #620207, text: #FFFFFF, border: #420205, lightens: (55%,  40%, 10%, 20%, 10%), ),
  ),
  "secondary": (
    light:          ( bg: #0d6ec3, text: #000000, border: #074f8f,  lightens: (55%, 45%, 35%, 20%, 0%), ),
    dark:           ( bg: #023664, text: #FFFFFF, border: #022748,  lightens: (50%, 35%, 10%, 20%, 10%), ),
    high-contrast:  ( bg: #012442, text: #FFFFFF, border: #011a2f,  lightens: (50%, 35%, 10%, 20%, 10%), ),
  ),
  "red": (
    light:          ( bg: #ee1b0a, text: #000000, border: #F44335,  lightens: (50%, 45%, 35%, 20%, 0%), ),
    dark:           ( bg: #8c1a12, text: #FFFFFF, border: #8c1a12,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #680b05, text: #FFFFFF, border: #680b05,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "pink": (
    light:          ( bg: #E91E63, text: #000000, border: #E91E63,  lightens: (45%, 35%, 25%, 15%, 0%), ),
    dark:           ( bg: #960c3a, text: #FFFFFF, border: #680b05,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #560520, text: #FFFFFF, border: #560520,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "purple": (
    light:          ( bg: #9c26b0, text: #000000, border: #9c26b0,  lightens: (55%, 45%, 30%, 20%, 0%), ),
    dark:           ( bg: #680e77, text: #FFFFFF, border: #680e77,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #3b0544, text: #FFFFFF, border: #3b0544,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "deep-purple": (
    light:          ( bg: #673BB7, text: #000000, border: #673BB7,  lightens: (50%, 45%, 35%, 20%, 0%), ),
    dark:           ( bg: #41198a, text: #FFFFFF, border: #41198a,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #25065d, text: #FFFFFF, border: #25065d,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "indigo": (
    light:          ( bg: #3F51B5, text: #000000, border: #3F51B5,  lightens: (50%, 45%, 35%, 20%, 0%), ),
    dark:           ( bg: #172576, text: #FFFFFF, border: #172576,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #091454, text: #FFFFFF, border: #091454,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "blue": (
    light:          ( bg: #1b79c6, text: #000000, border: #1b79c6,  lightens: (52%, 45%, 35%, 20%, 0%), ),
    dark:           ( bg: #134e7e, text: #FFFFFF, border: #134e7e,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #042c4c, text: #FFFFFF, border: #042c4c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "light-blue": (
    light:          ( bg: #03A9F4, text: #000000, border: #03A9F4,  lightens: (48%, 40%, 35%, 20%, 0%), ),
    dark:           ( bg: #00577f, text: #FFFFFF, border: #00577f,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #003f5c, text: #FFFFFF, border: #003f5c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "cyan": (
    light:          ( bg: #01BCD4, text: #000000, border: #01BCD4,  lightens: (54%, 47%, 35%, 20%, 0%), ),
    dark:           ( bg: #006b79, text: #FFFFFF, border: #006b79,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #00434c, text: #FFFFFF, border: #00434c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "teal": (
    light:          ( bg: #009688, text: #000000, border: #009688,  lightens: (65%, 55%, 35%, 10%, 0%), ),
    dark:           ( bg: #00665c, text: #FFFFFF, border: #00665c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #003e38, text: #FFFFFF, border: #003e38,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "green": (
    light:          ( bg: #4CAF50, text: #000000, border: #4CAF50,  lightens: (45%, 35%, 25%, 15%, 0%), ),
    dark:           ( bg: #0f5411, text: #FFFFFF, border: #0f5411,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #012b02, text: #FFFFFF, border: #012b02,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "light-green": (
    light:          ( bg: #8BC34A, text: #000000, border: #8BC34A,  lightens: (42%, 35%, 25%, 15%, 0%), ),
    dark:           ( bg: #34540f, text: #FFFFFF, border: #34540f,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #243f06, text: #FFFFFF, border: #243f06,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "lime": (
    light:          ( bg: #CDDC39, text: #000000, border: #CDDC39,  lightens: (42%, 35%, 25%, 15%, 0%), ),
    dark:           ( bg: #616a0b, text: #FFFFFF, border: #616a0b,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #3d4304, text: #FFFFFF, border: #3d4304,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "yellow": (
    light:          ( bg: #FFEB3B, text: #000000, border: #FFEB3B,  lightens: (33%, 27%, 20%, 10%, 0%), ),
    dark:           ( bg: #877e2d, text: #FFFFFF, border: #877e2d,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #565017, text: #FFFFFF, border: #565017,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "amber": (
    light:          ( bg: #FFC108, text: #000000, border: #FFC108,  lightens: (45%, 35%, 25%, 15%, 0%), ),
    dark:           ( bg: #6b5103, text: #FFFFFF, border: #6b5103,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #3d2f03, text: #FFFFFF, border: #3d2f03,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "orange": (
    light:          ( bg: #FFC108, text: #000000, border: #FFC108,  lightens: (40%, 30%, 20%, 10%, 0%), ),
    dark:           ( bg: #836304, text: #FFFFFF, border: #836304,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #4f3b04, text: #FFFFFF, border: #4f3b04,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "deep-orange": (
    light:          ( bg: #FF5722, text: #000000, border: #FF5722,  lightens: (40%, 30%, 20%, 10%, 0%), ),
    dark:           ( bg: #a83715, text: #FFFFFF, border: #a83715,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #5b1d0b, text: #FFFFFF, border: #5b1d0b,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "brown": (
    light:          ( bg: #795548, text: #000000, border: #795548,  lightens: (60%, 50%, 40%, 20%, 0%), ),
    dark:           ( bg: #4e3025, text: #FFFFFF, border: #4e3025,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #2b1912, text: #FFFFFF, border: #2b1912,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "grey": (
    light:          ( bg: #707070, text: #000000, border: #9E9E9E,  lightens: (50%, 40%, 30%, 15%, 0%), ),
    dark:           ( bg: #454545, text: #FFFFFF, border: #454545,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #2d2d2d, text: #FFFFFF, border: #2d2d2d,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "blue-grey": (
    light:          ( bg: #607D8B, text: #000000, border: #607D8B,  lightens: (50%, 40%, 30%, 20%, 0%), ),
    dark:           ( bg: #2a383e, text: #FFFFFF, border: #2a383e,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast:  ( bg: #232f35, text: #FFFFFF, border: #232f35,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
);
h1 {
  margin: 0px;
  padding: 0px;
  font-size:  30px;
  line-height: 150%;
}
h2 {
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  line-height: 150%;
}
.amostras {
  width: 100%;
  display: flex;
  padding:  20px;
  > div {
    width: 33%;
    margin:  5px;
    > div {
      margin-bottom: 10px;
    }
  }
}


@each $themeName, $themeConfigs in $themes {
  @each $colorName, $colorConfigs in $themeColors {

    // Obtendo configurações de cores do tema
    //@debug '$themeName: ', $themeName, '$themeConfigs: ', $themeConfigs, '$colorName: ', $colorName, '$colorConfigs: ', $colorConfigs;
    $colorConfigByTheme:  map-get($colorConfigs, $themeName);
    $bgColor:             map-get($colorConfigByTheme, 'bg');
    $textColor:           map-get($colorConfigByTheme, 'text');
    $borderColor:         map-get($colorConfigByTheme, 'border');
    $lightens:            map-get($colorConfigByTheme, 'lightens');
    $darkens:             map-get($colorConfigByTheme, 'darkens');

    // Gerando variações de 1 a 5 para cada cor
    @for $i from 1 through 5 {
      $adjustedBgColor: $bgColor;
      $lighten:         0%;
      $darken:          0%;
      $adjustedBgColor: $bgColor;

      @if $lightens != null and length($lightens) >= $i {
        $adjustedBgColor: lighten($adjustedBgColor, nth($lightens, $i));
      }
      @if $colorName == 'primary' and $themeName == 'light' {
        @debug '$lightens: ', $lightens, length($lightens), $lighten, $i;
      }

      //@if $darkens != null and length($darkens) >= $i {
      //  $adjustedBgColor: darken($adjustedBgColor, nth($darkens, $i));
      //}
      //@debug '$darkens: ', $darkens, length($darkens), $darken, $i;
      //$lighten: if( $i >= length($lightens), 0%, index($lightens, $i) );
      //$darken:  if( $i >= length($darkens),  0%, index($darkens, $i) );







      //@if $themeName == 'light' {
      //  $adjustedBgColor: color.adjust($adjustedBgColor, $lightness:  20%);
      //  $adjustedBgColor: color.adjust($adjustedBgColor, $whiteness: -20%);
      //}
      //@else if $themeName == 'dark' {
      //  $adjustedBgColor: color.adjust($adjustedBgColor, $whiteness: -20%);
      //  $adjustedBgColor: color.adjust($adjustedBgColor, $blackness:  20%);
      //}
      //@else {
      //  $adjustedBgColor: color.adjust($adjustedBgColor, $blackness:   20%);
      //  $adjustedBgColor: color.adjust($adjustedBgColor, $saturation: -20%);
      //}

      body[theme="#{$themeName}"] .bg-#{$colorName}-#{$i},
      .theme-#{$themeName} .bg-#{$colorName}-#{$i} {
        background-color: $adjustedBgColor !important;
        color:  $textColor;

        * {
          background-color: $adjustedBgColor;
          color:  $textColor;
        }

        &:hover {
          background-color: darken($adjustedBgColor, 10%) !important;

          * {
            background-color: darken($adjustedBgColor, 10%);
          }
        }
      }

      body[theme="#{$themeName}"] .text-#{$colorName}-#{$i},
      .theme-#{$themeName} .text-#{$colorName}-#{$i} {
        color: $adjustedBgColor !important;

        * {
          color: $adjustedBgColor;
        }

        &:hover {
          color: darken($adjustedBgColor, 10%) !important;

          * {
            color: darken($adjustedBgColor, 10%);
          }
        }
      }

      body[theme="#{$themeName}"] .border-#{$colorName}-#{$i},
      .theme-#{$themeName} .border-#{$colorName}-#{$i} {
        border-color: $adjustedBgColor !important;

        * {
          border-color: $adjustedBgColor;
        }

        &:hover {
          border-color: darken($adjustedBgColor, 10%) !important;

          * {
            border-color: darken($adjustedBgColor, 10%);
          }
        }
      }
    }
  }
}

</style>
