import { BrowserRouter } from 'react-router-dom'
import Router from './routers/routes'
import GlobalStyle from './globals/globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  )
}

export default App
