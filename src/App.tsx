import { BrowserRouter } from 'react-router-dom'
import Router from './routers/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  )
}

export default App
