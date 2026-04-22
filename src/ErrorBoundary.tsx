import React from 'react';
export class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error("EB Caught:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return <div style={{padding: '50px', color: 'red', zIndex: 10000, position: 'relative', background: '#222'}}><h1>React Error:</h1><pre>{this.state.error?.toString()}</pre></div>;
    }
    return this.props.children;
  }
}
