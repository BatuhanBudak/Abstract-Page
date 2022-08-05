import '../styles/globals.css'
import '../styles/Header.css';
import '../styles/Services.css';
import '../styles/Footer.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
