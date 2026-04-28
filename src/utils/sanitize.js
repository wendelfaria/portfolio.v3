/**
 * Remove tags HTML de uma string para evitar XSS ao renderizar conteúdo dinâmico.
 * Use sempre que exibir dados vindos de fontes externas.
 */
export function stripHtml(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/<[^>]*>/g, '')
}

/**
 * Trunca uma string no limite de caracteres especificado, adicionando reticências.
 */
export function truncate(str, maxLength = 100) {
  if (typeof str !== 'string') return ''
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}
