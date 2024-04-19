import { IJavField } from 'components/JavComponents/interfaces/IJavField';
import { IJavOption } from 'components/JavComponents/interfaces/IJavOption';

export interface IJavFieldOptions extends IJavField {
  options: IJavOption[]
}
