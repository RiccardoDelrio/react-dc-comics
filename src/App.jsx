/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Headers from './components/Header'
import Footers from './components/Footer'
import Main from './components/Main'
import Banner from './components/Banner'
import Jumbotron from './components/Jumbotron'
import navLinks from './data/navLinks'
function App() {

  return (
    <>
      <Headers links={navLinks} />
      <Jumbotron />
      <Main />
      <Banner />
      <Footers />
    </>
  )
}

export default App
