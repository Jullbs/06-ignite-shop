import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

import { formatPrice } from "../../util/format"

import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"
import { stripe } from "../../lib/stripe"


interface Product {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  currency: string,
  description: string,
  defaultPriceId: string,
  
}

interface ProductProps {
  product: Product
    
}

export default function Product({ product }: ProductProps){
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartDetails, addItem } = useShoppingCart()
  const { isFallback } = useRouter()

  if (isFallback) {
    return  <p>Loading...</p>
  }

  const handleAddItemToCart = ( product: Product ) => {
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
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.price/100)}</span>

          <p>{product.description}</p>

          <button onClick={() => {handleAddItemToCart(product)}}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
    
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos/mais acessados e passar pelo paths

  return {
    paths: [
      { params: { id: "prod_N9NUxnz1kKK368"} }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount, 
        curency: price.currency,
        description: product.description,
        defaultPriceId: price.id     
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}