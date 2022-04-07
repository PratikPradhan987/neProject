import Navbar from '../components/Navbar'
import Demo from '../components/Main landing page/Demo'
import '../styles/globals.css'
import Footer from '../components/Main landing page/Footer'


// function MyApp({ Component, pageProps }) {
//   return <>
//   <Navbar/>
//   <hr/>
//   {/* <Demo/> */}
//   <Component {...pageProps} />
//   <Footer/>
//   </>
// }

// export default MyApp


import { useRouter } from 'next/router';

function Myapp({Component, pageProps}){
const router = useRouter();
const { pathname } = router;
const noNav = ['/seller','/Sellermain' ,'/user_login'];

return(<>
{noNav.includes(pathname) ? null : <Navbar/>}
<Component {...pageProps} />
{noNav.includes(pathname) ? null : <Footer />}
</>
);
}

export default Myapp

