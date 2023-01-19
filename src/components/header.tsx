import  Image from "next/image"
import Link from "next/link"
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from "use-shopping-cart"

import { CartModal } from "./cartmodal"

import { HeaderContainer } from "../../styles/components/header"

import { Handbag } from "phosphor-react"
import logoImg from "../assets/logo.svg"



export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
        <Link href={`/`}  prefetch={false}>
          <Image src={logoImg} alt=''/>
        </Link>
        

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} weight="bold"/>
              <p>{cartCount !== 0 && cartCount}</p>
            </button>
          </Dialog.Trigger>  
                     
          <CartModal />
        </Dialog.Root>
    </HeaderContainer>
  )
}