export interface IJavOption {
  [props: string]: any;
  label: string,
  value: any,
  disable?: boolean | undefined;
  cannotSelect?: boolean
}
