import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Welcome to AtelierAI!')

  return (
    <div className="container">
      <div className="header">
        <h1>✦ AtelierAI ✦</h1>
        <h2>Fashion Design Studio</h2>
      </div>
      <div className="card">
        <p>{message}</p>
        <button onClick={() => setMessage('Your Fashion AI Assistant is Ready!')}>
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App
