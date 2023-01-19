import type { AppProps } from 'next/app'

import { CartProvider } from 'use-shopping-cart';

import { globalStyles } from '../../styles/global';

import Layout from '../components/layout';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      // mode="payment"
      cartMode="checkout-session"
      stripe={JSON.stringify(process.env.STRIPE_PUBLIC_KEY)}
      currency="BRL"
      shouldPersist={true}
    >
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </CartProvider>
    
 )
}
