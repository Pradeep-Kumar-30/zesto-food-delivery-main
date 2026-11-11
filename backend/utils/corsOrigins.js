/** Comma-separated FRONTEND_URL values, e.g. https://app.example.com,http://localhost:5173 */
export function parseAllowedOrigins() {
  const raw = process.env.FRONTEND_URL || 'http://localhost:5173'
  const list = raw.split(',').map((s) => s.trim()).filter(Boolean)
  return list.length ? list : ['http://localhost:5173']
}
