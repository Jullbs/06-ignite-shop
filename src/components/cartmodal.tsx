import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { Overlay, Content, CloseButton, BuyButton, CartContent, Product } from '../../styles/components/cartmodal'

import shirtImage from "../../public/Shirt.png"

import { X } from "phosphor-react"

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        
        <Dialog.Title>Sacola de Compras</Dialog.Title>
        <CartContent>

          <Product>
            <div>
              <Image src={shirtImage} width={102} height={94} alt=""/>
            </div>
            <span>
              <p>Camiseta Beyond Limits</p>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </span>
          </Product>

          <div>
            <span>
              <p>Quantidade</p>
              <p>3 itens</p>
            </span>
            <span>
              <strong>Total</strong>
              <strong>R$270,00</strong>
            </span>
          </div>
        </CartContent>   

        <BuyButton>
          Finalizar Compra
        </BuyButton>
      </Content>
    </Dialog.Portal>
  )
}