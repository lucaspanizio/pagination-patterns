/**
 * Simula um atraso antes de fazer a requisição.
 *
 * @param {number} ms - O tempo em milissegundos para simular o atraso.
 * @returns {Promise<void>} Uma Promise que resolve após o atraso especificado.
 */
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))
