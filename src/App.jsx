import './App.css'
import Card from './Card'

function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f3f4f6 0%, #dbeafe 100%)',
      padding: '24px'
    }}>
      <Card />
    </main>
  )
}

export default App
