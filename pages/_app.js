import Navbar from '../components/Navbar'
import Demo from '../components/Main landing page/Demo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <hr/>
  {/* <Demo/> */}
  <Component {...pageProps} />
  </>
}

export default MyApp
