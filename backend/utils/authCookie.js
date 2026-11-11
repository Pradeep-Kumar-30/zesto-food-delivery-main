/**
 * Auth cookie flags for dev vs production (HTTPS, cross-origin SPA + API).
 * Set COOKIE_SAME_SITE / COOKIE_SECURE in .env to override defaults.
 */
export function getAuthCookieOptions() {
  const production = process.env.NODE_ENV === 'production'
  const secure =
    process.env.COOKIE_SECURE === 'true' ||
    (production && process.env.COOKIE_SECURE !== 'false')

  let sameSite = process.env.COOKIE_SAME_SITE || (secure ? 'none' : 'lax')
  if (sameSite === 'none' && !secure) {
    sameSite = 'lax'
  }

  const options = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure,
    sameSite,
    path: '/',
  }

  if (process.env.COOKIE_DOMAIN) {
    options.domain = process.env.COOKIE_DOMAIN
  }

  return options
}

/** Options for clearCookie (omit maxAge). */
export function getAuthClearCookieOptions() {
  const o = getAuthCookieOptions()
  const out = { path: o.path, secure: o.secure, sameSite: o.sameSite }
  if (o.domain) out.domain = o.domain
  return out
}
