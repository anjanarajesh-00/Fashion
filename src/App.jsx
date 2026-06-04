export default function App() {
  return (
    <div style={{textAlign: 'center', padding: '40px'}}>
      <h1 style={{color: '#d4af37', fontSize: '3rem', marginBottom: '20px'}}>✦ AtelierAI ✦</h1>
      <h2 style={{color: '#f0e68c', fontSize: '1.8rem', marginBottom: '20px'}}>Fashion Design Studio</h2>
      <p style={{fontSize: '1.2rem', color: '#999', marginBottom: '20px'}}>React is working! 🎉</p>
      <button 
        style={{
          padding: '12px 30px',
          background: '#d4af37',
          color: '#1a1a1a',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
        onClick={() => alert('App is running!')}
      >
        Click Me
      </button>
    </div>
  )
}