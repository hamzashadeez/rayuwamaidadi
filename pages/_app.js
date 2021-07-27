import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className='container position-relative'>
    <Header />
    <Component {...pageProps}>
    </Component>
    </div>
  );
}

export default MyApp;
