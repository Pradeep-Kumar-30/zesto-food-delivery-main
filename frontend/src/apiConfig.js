const apiBase = import.meta.env.VITE_API_URL?.trim()
export const serverUrl = apiBase ? apiBase.replace(/\/$/, '') : 'http://localhost:8000'
