import React from 'react';

export default class ErrorBoundary extends React.Component {

    state = { hasError: false };

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.    return { hasError: true };  }
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI 
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

// erorr boundaries dont catch errors in async code