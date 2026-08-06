import { useQuery } from '@tanstack/react-query'
import { getWeatherForecast } from '@/api/client'
import { Button } from '@/components/ui/button'
import { PageHeading } from '@/components/Typography'

function Home() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['weatherForecast'],
    queryFn: getWeatherForecast,
  })

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <PageHeading className="mb-0">Weather Forecast</PageHeading>
        <Button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing…' : 'Refresh'}
        </Button>
      </div>

      {isLoading && <p className="text-muted-foreground">Loading…</p>}

      {isError && (
        <p role="alert" className="text-destructive">
          Failed to load forecast:{' '}
          {error instanceof Error ? error.message : 'Unknown error'}
        </p>
      )}

      {data && (
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-4 font-medium">Date</th>
              <th className="py-2 pr-4 font-medium">Temp. (°C)</th>
              <th className="py-2 pr-4 font-medium">Temp. (°F)</th>
              <th className="py-2 font-medium">Summary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.date} className="border-b">
                <td className="py-2 pr-4">{item.date}</td>
                <td className="py-2 pr-4">{item.temperatureC}</td>
                <td className="py-2 pr-4">{item.temperatureF}</td>
                <td className="py-2">{item.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Home
