import { useEffect, useState } from 'react'
import { getWeatherForecast } from './api/client'
import type { WeatherForecast } from './types/weather'
import './App.css'

function App() {
  const [forecast, setForecast] = useState<WeatherForecast[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getWeatherForecast()
      .then(setForecast)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : 'Unknown error'),
      )
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <h1>Weather Forecast</h1>
      {loading && <p>Loading…</p>}
      {error && <p role="alert">Failed to load forecast: {error}</p>}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (°C)</th>
              <th>Temp. (°F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecast.map((item) => (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.temperatureC}</td>
                <td>{item.temperatureF}</td>
                <td>{item.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

export default App
