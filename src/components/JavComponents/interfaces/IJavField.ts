import { EContentSizes } from 'components/JavComponents/enums/EContentSizes';
import { ValidationRule } from 'quasar';

export interface IJavField {
  [props: string]: any;
  name?: string,
  size?: EContentSizes,
  type?: 'input' | 'select' | 'buttonsToggle' | string,
  label?: string,
  info?: string,
  required?: string,
  visible?: boolean,
  disable?: boolean | undefined;
  grid?: number|{[contetSize: string]: number},
  width?: string,
  value?: any,
  rules?: ValidationRule[],
  icon?: string,
  beforeIcon?: string,
  afterIcon?: string,
  onchange?: any,


  attrs?: any,
  slot?: string | undefined,
}
