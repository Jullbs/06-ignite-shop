import  Image from "next/image"
import * as Dialog from '@radix-ui/react-dialog'

import { CartModal } from "./cartmodal"

import { HeaderContainer } from "../../styles/components/header"

import { Handbag } from "phosphor-react"
import logoImg from "../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
        <Image src={logoImg} alt=''/>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} weight="bold"/>
            </button>
          </Dialog.Trigger>  
          
          
           
          <CartModal />
        </Dialog.Root>
    </HeaderContainer>
  )
}