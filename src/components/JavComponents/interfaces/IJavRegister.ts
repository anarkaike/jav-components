export interface IJavRegister {
  // Campos de identificação de registro de entidade
  id?: string,
  label?: string,
  visible?: boolean,
  inputProps?: any,
  grid?: number,


  // Auditoria - Campos de auditoria de registro de entidade
  // Auditoria - Create
  created_at?: string,
  created_by?: IJavRegister | number,
  // Auditoria - Update
  updated_at?: string,
  updated_by?: IJavRegister | number,
  updated_values?: IJavRegister[],
  // Auditoria - Delete
  deleted_at?: string,
  deleted_by?: IJavRegister | number,
}
