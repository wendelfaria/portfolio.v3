/**
 * Wrapper para Google Analytics / Plausible.
 * Fase 2: integrar com GA4 ou Plausible usando VITE_GA_ID.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return

  if (window.gtag && import.meta.env.VITE_GA_ID) {
    window.gtag('event', eventName, params)
  }
}

export function trackPageView(path) {
  if (typeof window === 'undefined') return

  if (window.gtag && import.meta.env.VITE_GA_ID) {
    window.gtag('config', import.meta.env.VITE_GA_ID, { page_path: path })
  }
}
