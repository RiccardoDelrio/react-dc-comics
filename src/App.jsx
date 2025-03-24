/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Headers from './components/Header'
import Footers from './components/Footer'
import Main from './components/Main'
import Banner from './components/Banner'
import Jumbotron from './components/Jumbotron'
import navLinks from './data/navLinks'
import FooterLink from './data/footer'
import comics from './data/comics'
function App() {

  return (
    <>
      <Headers links={navLinks} />
      <Jumbotron />
      <Main array={comics} />
      <Banner />
      <Footers links={FooterLink.dc_footer} links_shop={FooterLink.shop_footer} links_privacy={FooterLink.dc_comics} links_sites={FooterLink.dc_comics} />
    </>
  )
}

export default App
