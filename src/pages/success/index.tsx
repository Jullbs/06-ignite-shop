import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

import { ImageContainer, SuccessContainer } from "../../../styles/pages/success";
import { stripe } from "../../lib/stripe";

interface InfoFromProduct {
  productInfo: {
    images: string[]
  }
}

interface SuccessProps {
  customerName: string,
  productsData: InfoFromProduct[]
}

export default function Success({ customerName, productsData }: SuccessProps) {
  const amountOfProductsBought: number = productsData.length
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  },[])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <div>
          {productsData !== undefined
            && productsData.map((product) => {
            return (
              <ImageContainer>
                <Image src={product.productInfo.images[0]} width={130} height={142} alt="" />
              </ImageContainer>
            )
          })}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul! <strong>{customerName}</strong>, sua compra de 
          {amountOfProductsBought === 1 
              ? ` ${amountOfProductsBought} camiseta `
              : ` ${amountOfProductsBought} camisetas ` }
          já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }    
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const customerName = session.customer_details!.name
  const products = session.line_items!.data.map((item) => {
    return {
      productInfo: item.price!.product
    }
  })

  return { 
    props: {
      customerName,
      productsData: products
    }
  }
}