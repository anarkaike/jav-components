/**
 * Enumeration for different content sizes.
 * Número a frente da key indica:
 * "nível de condensação"
 * @enum {string}
 */
export enum EContentSizes {
  MICRO = 'micro', // Menos que o obrigatório ter
  MANDATORY = 'mandatory', // obrigatórios ter
  IMPORTANTS = 'importants', // obrigatório mais alguns
  COMPLETE = 'complete', // Tudo relacionado diretamente
  DETAILED = 'etailed' // Tudo e mais um pouco
}
