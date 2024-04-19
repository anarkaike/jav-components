import { EContentSizes } from 'components/JavComponents/enums/EContentSizes';
import { IJavButton } from 'components/JavComponents/interfaces/IJavButton';
import { IJavField } from 'components/JavComponents/interfaces/IJavField';
import { IJavFieldOptions } from 'components/JavComponents/interfaces/IJavFieldOptions';
import { IJavGrid } from 'components/JavComponents/interfaces/IJavGrid';
import { IJavRegister } from 'components/JavComponents/interfaces/IJavRegister';

export interface IJavForm {
  name?: string,
  title?: string,
  size?: EContentSizes,
  subtitle?: string,
  description?: string,
  icon?: string,
  beforeIcon?: string,
  afterIcon?: string,
  legend?: string,
  grid?: object | IJavGrid | number,
  data?: IJavRegister[],
  fields?: IJavFieldOptions[] | IJavField[],
  buttons?: IJavButton[],
}
