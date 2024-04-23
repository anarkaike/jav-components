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
$themes-modes: (
  light: (),
  dark: (),
  high-contrast: (),
);

$theme-colors: (
  "primary": (
    light: ( bg: #BF020A, text: #000000, border: #94030a, lightens: (100%, 90%, 30%, 10%, 0%) ), //, darkens: (50%, 0%, 0%, 0%, 0%),
    dark: ( bg: #650409, text: #FFFFFF, border: #590408, lightens: (25%, 30%, 5%, 10%, 10%), ),
    high-contrast: ( bg: #620207, text: #FFFFFF, border: #420205, lightens: (55%, 40%, 10%, 20%, 10%), ),
  ),
  "secondary": (
    light: ( bg: #0d6ec3, text: #000000, border: #074f8f,  lightens: (50%, 35%, 10%, 20%, 10%), ),
    dark: ( bg: #023664, text: #FFFFFF, border: #022748,  lightens: (50%, 35%, 10%, 20%, 10%), ),
    high-contrast: ( bg: #012442,  text: #FFFFFF,  border: #011a2f,  lightens: (50%, 35%, 10%, 20%, 10%), ),
  ),
  "red": (
    light: ( bg: #ee1b0a, text: #000000, border: #F44335,  lightens: (35%, 25%, 15%, 25%, 10%), ),
    dark: ( bg: #8c1a12, text: #FFFFFF, border: #8c1a12,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #680b05, text: #FFFFFF, border: #680b05,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "pink": (
    light: ( bg: #E91E63, text: #000000, border: #E91E63,  lightens: (40%, 30%, 15%, 25%, 10%), ),
    dark: ( bg: #960c3a, text: #FFFFFF, border: #680b05,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #560520, text: #FFFFFF, border: #560520,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "purple": (
    light: ( bg: #9c26b0, text: #000000, border: #9c26b0,  lightens: (50%, 35%, 15%, 25%, 10%), ),
    dark: ( bg: #680e77, text: #FFFFFF, border: #680e77,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #3b0544, text: #FFFFFF, border: #3b0544,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "deep-purple": (
    light: ( bg: #673BB7, text: #000000, border: #673BB7,  lightens: (45%, 20%, 15%, 25%, 10%), ),
    dark: ( bg: #41198a, text: #FFFFFF, border: #41198a,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #25065d, text: #FFFFFF, border: #25065d,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "indigo": (
    light: ( bg: #3F51B5, text: #000000, border: #3F51B5,  lightens: (45%, 25%, 10%, 20%, 10%), ),
    dark: ( bg: #172576, text: #FFFFFF, border: #172576,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #091454, text: #FFFFFF, border: #091454,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "blue": (
    light: ( bg: #1b79c6, text: #000000, border: #1b79c6,  lightens: (45%, 35%, 10%, 20%, 10%), ),
    dark: ( bg: #134e7e, text: #FFFFFF, border: #134e7e,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #042c4c, text: #FFFFFF, border: #042c4c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "light-blue": (
    light: ( bg: #03A9F4, text: #000000, border: #03A9F4,  lightens: (45%, 35%, 10%, 25%, 10%), ),
    dark: ( bg: #00577f, text: #FFFFFF, border: #00577f,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #003f5c, text: #FFFFFF, border: #003f5c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "cyan": (
    light: ( bg: #01BCD4, text: #000000, border: #01BCD4,  lightens: (50%, 35%, 10%, 20%, 10%), ),
    dark: ( bg: #006b79, text: #FFFFFF, border: #006b79,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #00434c, text: #FFFFFF, border: #00434c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "teal": (
    light: ( bg: #009688, text: #000000, border: #009688,  lightens: (60%, 40%, 10%, 20%, 10%), ),
    dark: ( bg: #00665c, text: #FFFFFF, border: #00665c,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #003e38, text: #FFFFFF, border: #003e38,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "green": (
    light: ( bg: #4CAF50, text: #000000, border: #4CAF50,  lightens: (45%, 35%, 10%, 25%, 10%), ),
    dark: ( bg: #0f5411, text: #FFFFFF, border: #0f5411,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #012b02, text: #FFFFFF, border: #012b02,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "light-green": (
    light: ( bg: #8BC34A, text: #000000, border: #8BC34A,  lightens: (40%, 30%, 15%, 25%, 10%), ),
    dark: ( bg: #34540f, text: #FFFFFF, border: #34540f,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #243f06, text: #FFFFFF, border: #243f06,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "lime": (
    light: ( bg: #CDDC39, text: #000000, border: #CDDC39,  lightens: (35%, 25%, 15%, 25%, 10%), ),
    dark: ( bg: #616a0b, text: #FFFFFF, border: #616a0b,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #3d4304, text: #FFFFFF, border: #3d4304,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "yellow": (
    light: ( bg: #FFEB3B, text: #000000, border: #FFEB3B,  lightens: (30%, 15%, 25%, 35%, 10%), ),
    dark: ( bg: #877e2d, text: #FFFFFF, border: #877e2d,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #565017, text: #FFFFFF, border: #565017,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "amber": (
    light: ( bg: #FFC108, text: #000000, border: #FFC108,  lightens: (40%, 30%, 15%, 25%, 10%), ),
    dark: ( bg: #6b5103, text: #FFFFFF, border: #6b5103,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #3d2f03, text: #FFFFFF, border: #3d2f03,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "orange": (
    light: ( bg: #FFC108, text: #000000, border: #FFC108,  lightens: (40%, 30%, 10%, 20%, 10%), ),
    dark: ( bg: #836304, text: #FFFFFF, border: #836304,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #4f3b04, text: #FFFFFF, border: #4f3b04,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "deep-orange": (
    light: ( bg: #FF5722, text: #000000, border: #FF5722,  lightens: (40%, 25%, 15%, 25%, 10%), ),
    dark: ( bg: #a83715, text: #FFFFFF, border: #a83715,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #5b1d0b, text: #FFFFFF, border: #5b1d0b,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "brown": (
    light: ( bg: #795548, text: #000000, border: #795548,  lightens: (50%, 35%, 15%, 25%, 10%), ),
    dark: ( bg: #4e3025, text: #FFFFFF, border: #4e3025,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #2b1912, text: #FFFFFF, border: #2b1912,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "grey": (
    light: ( bg: #989898, text: #000000, border: #9E9E9E,  lightens: (35%, 25%, 25%, 40%, 10%), ),
    dark: ( bg: #454545, text: #FFFFFF, border: #454545,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #2d2d2d, text: #FFFFFF, border: #2d2d2d,  lightens: (40%, 35%, 10%, 15%, 10%), ),
  ),
  "blue-grey": (
    light: ( bg: #607D8B, text: #000000, border: #607D8B,  lightens: (45%, 35%, 15%, 25%, 10%), ),
    dark: ( bg: #2a383e, text: #FFFFFF, border: #2a383e,  lightens: (40%, 35%, 10%, 15%, 10%), ),
    high-contrast: ( bg: #232f35, text: #FFFFFF, border: #232f35, lightens: (40%, 35%, 10%, 15%, 10%), ),
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


@each $themeName, $_ in $themes-modes {
  @each $name, $color-specs in $theme-colors {
    $theme-colorsss: map-get($color-specs, $themeName); // Isso retorna o mapa do tema
    $bgColor: map-get($theme-colorsss, 'bg');
    $textColor: map-get($theme-colorsss, 'text');
    $borderColor: map-get($theme-colorsss, 'border');
    $lightens: map-get($theme-colorsss, 'lightens');
    $darkens: map-get($theme-colorsss, 'darkens');

    @for $i from 1 through 5 {
      $adjustedBgColor: $bgColor;
      $lighten: 0%;
      $darken: 0%;
      @if $i == 1 {
        $lighten: if(nth($lightens, 1) == null, 40%, nth($lightens, 1));
        $darken: if(nth($darkens, 1) == null, 0%, nth($darkens, 1));
        //$adjustedBgColor: lighten($bgColor, if(nth($lighten, 1) == null, 40%, nth($lighten, 1)));
      }
      @else if $i == 2 {
        $lighten: if(nth($lightens, 2) == null, 35%, nth($lightens, 2));
        $darken: if(index($darkens, 2) == null, 0%, nth($darkens, 2));
        //$adjustedBgColor: lighten($bgColor, if(nth($lighten, 1) == null, 35%, nth($lighten, 2)));
      }
      @else if $i == 3 {
        $lighten: if(nth($lightens, 3) == null, 35%, nth($lightens, 3));
        $darken: if(index($darkens, 3) == null, 0%, nth($darkens, 3));
        $textColor: #FFF;
      }
      @else if $i == 4 {
        //$adjustedBgColor: darken($bgColor, if(nth($lighten, 1) == null, 10%, nth($lighten, 3)));
        $lighten: if(nth($lightens, 4) == null, 10%, nth($lightens, 4));
        $darken: if(index($darkens, 4) == null, 0%, nth($darkens, 4));
        $textColor: #FFF;
      }
      @else if $i == 5 {
        //$adjustedBgColor: darken($bgColor, if(nth($lighten, 1) == null, 15%, nth($lighten, 4)));
        $lighten: if(nth($lightens, 5) == null, 15%, nth($lightens, 5));
        $darken: if(index($darkens, 5) == null, 0%, nth($darkens, 5));
        $textColor: #FFF;
      }


      $adjustedBgColor: $bgColor;
      $adjustedBgColor: darken($adjustedBgColor, $darken);
      $adjustedBgColor: lighten($adjustedBgColor, $lighten);
      @if $themeName == 'light' {
        $adjustedBgColor: color.adjust($adjustedBgColor, $lightness: 20%);
        $adjustedBgColor: color.adjust($adjustedBgColor, $whiteness: -20%);
      }
      @else if $themeName == 'dark' {
        $adjustedBgColor: color.adjust($adjustedBgColor, $whiteness: -20%);
        $adjustedBgColor: color.adjust($adjustedBgColor, $blackness: 20%);
      }
      @else {
        $adjustedBgColor: color.adjust($adjustedBgColor, $blackness: 20%);
        $adjustedBgColor: color.adjust($adjustedBgColor, $saturation: -20%);
      }

      body[theme="#{$themeName}"] .bg-#{$name}-#{$i},
      .theme-#{$themeName} .bg-#{$name}-#{$i} {
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

      body[theme="#{$themeName}"] .text-#{$name}-#{$i},
      .theme-#{$themeName} .text-#{$name}-#{$i} {
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

      body[theme="#{$themeName}"] .border-#{$name}-#{$i},
      .theme-#{$themeName} .border-#{$name}-#{$i} {
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
