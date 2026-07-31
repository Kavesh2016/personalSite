import type { WeatherForecast } from '../types/weather'

const baseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api'

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  return (await response.json()) as T
}

export function getWeatherForecast(): Promise<WeatherForecast[]> {
  return request<WeatherForecast[]>('/weatherforecast')
}
