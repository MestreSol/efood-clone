import { BrowserRouter } from 'react-router-dom'
import Router from './routers/routes'
import GlobalStyle from './globals/globalStyle'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Router></Router>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
