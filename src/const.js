const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export default {
  baseUrl: (isBrowser ? window.baseUrl : null) || '',
  isBrowser,
  targetBlank: { rel: 'noopener noreferrer', target: '_blank' }
}
