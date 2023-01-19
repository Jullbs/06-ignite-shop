import Image from "next/image";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { useKeenSlider } from "keen-slider/react";
import { formatPrice } from "../util/format";

import { HomeContainer, Product } from "../../styles/pages/home";

import { Handbag } from "phosphor-react";

import "keen-slider/keen-slider.min.css";

export interface Product {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  currency: string,
  defaultPriceId: string,
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { cartDetails, addItem } = useShoppingCart()
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.7,
      spacing: 48,
    }
  })

  const handleAddItemToCart = (product: Product) => {
    const isAlreadyInCart = Object.keys(cartDetails!).find((item) => item === product.id)

    if (isAlreadyInCart) {
      return
    } else {
      addItem(product)
    }    
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`}  prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price/100)}</span>
                </div>
                  
                <button onClick={() => {handleAddItemToCart(product)}}>
                  <Handbag size={32} weight="bold"/>
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
   
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      curency: price.currency,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
