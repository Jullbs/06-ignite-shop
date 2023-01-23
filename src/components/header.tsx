import  Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from "use-shopping-cart"

import { CartModal } from "./cartmodal"

import { HeaderContainer } from "../../styles/components/header"

import { Handbag } from "phosphor-react"
import logoImg from "../assets/logo.svg"



export function Header() {
  const { cartCount } = useShoppingCart()
  const { pathname } = useRouter()

  const pageHeaderStyle = () => {
    if(pathname !== "/success") {
      return "spaceBetween"
    }else {
      return "center"
    }
  }

  return (
    <HeaderContainer content={pageHeaderStyle()}>
        <Link href={`/`}  prefetch={false}>
          <Image src={logoImg} alt=''/>
        </Link>
        
        {pathname !== "/success"
          &&
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Handbag size={24} weight="bold"/>
                <p>{cartCount !== 0 && cartCount}</p>
              </button>
            </Dialog.Trigger>  
                     
            <CartModal />
          </Dialog.Root>
        }
        
    </HeaderContainer>
  )
}