import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Unhandled render error:', error, info.componentStack)
  }

  private handleReset = (): void => {
    this.setState({ error: null })
  }

  render(): ReactNode {
    const { error } = this.state

    if (error) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <main
          role="alert"
          className="mx-auto flex max-w-3xl flex-col items-start gap-4 p-8"
        >
          <h1 className="text-2xl font-bold tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground">{error.message}</p>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-muted"
          >
            Try again
          </button>
        </main>
      )
    }

    return this.props.children
  }
}
