import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Atualiza o estado para exibir uma UI alternativa
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo })
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Exibe uma UI alternativa quando um erro é capturado
      return (
        <div
          style={{
            display: 'flex',
            paddingTop: '20px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h1>Algo deu errado.</h1>
          <div>
            {this.state.error && <summary>Detalhes do erro:</summary>}
            {this.state.error && <pre>{this.state.error.message}</pre>}
            {this.state.errorInfo && (
              <pre>{this.state.errorInfo.componentStack}</pre>
            )}
          </div>
        </div>
      )
    }

    // Renderiza os filhos normalmente
    return this.props.children
  }
}

export default ErrorBoundary
