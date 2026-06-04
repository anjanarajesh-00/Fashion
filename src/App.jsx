import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [designBrief, setDesignBrief] = useState('')
  const [loading, setLoading] = useState(false)

  const generateDesignBrief = async () => {
    setLoading(true)
    const apiKey = import.meta.env.VITE_ANTHROPIC_KEY
    
    if (!apiKey) {
      alert('API key not configured. Please add VITE_ANTHROPIC_KEY to environment variables.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          messages: [
            {
              role: 'user',
              content: `You are a fashion design expert. Create a brief design concept for: ${input}`
            }
          ]
        })
      })

      const data = await response.json()
      if (data.content && data.content[0]) {
        setDesignBrief(data.content[0].text)
      }
    } catch (error) {
      console.error('Error:', error)
      setDesignBrief('Error generating design brief. Check console for details.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>✦ AtelierAI ✦</h1>
        <h2>Fashion Design Studio</h2>
        <p>Powered by Claude AI</p>
      </div>

      <div className="card">
        <div className="input-section">
          <input
            type="text"
            placeholder="Describe your fashion concept..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && generateDesignBrief()}
          />
          <button onClick={generateDesignBrief} disabled={loading}>
            {loading ? 'Generating...' : 'Generate Design Brief'}
          </button>
        </div>

        {designBrief && (
          <div className="output-section">
            <h3>Design Brief:</h3>
            <p>{designBrief}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
