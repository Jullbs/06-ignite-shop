import type { AppProps } from 'next/app'

import { globalStyles } from '../../styles/global';

import { CartContextProvider } from '../context/CartContext';
import Layout from '../components/layout';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
    
 )
}
