import React from 'react'

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App