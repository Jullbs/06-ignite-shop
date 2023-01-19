import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'

import { Overlay, Content, CloseButton, BuyButton, CartContent, Product, CartDetails, CartItems } from '../../styles/components/cartmodal'

import { X } from "phosphor-react"


export function CartModal() {
  const { cartDetails, cartCount, formattedTotalPrice, removeItem } = useShoppingCart()

  const isBuyButtonDisabled = (cartCount === 0)

  const handleRemoveItem = (productId: string) => {
    removeItem(productId)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        
        <Dialog.Title>Sacola de Compras</Dialog.Title>
        
        <CartContent>
          <CartItems>
            {cartDetails !== undefined
              &&
              Object.values(cartDetails).map((cartItem) => {
                return (
                  <Product key={cartItem.id}>
                    <div>
                      <Image src={cartItem.imageUrl} width={102} height={94} alt=""/>
                    </div>
                    <span>
                      <p>{cartItem.name}</p>
                      <strong>{cartItem.formattedPrice}</strong>
                      <button onClick={() => handleRemoveItem(cartItem.id)}>
                        Remover
                      </button>
                    </span>
                  </Product>
                )                
              })             
            }
          </CartItems>

          <CartDetails>
            <span>
              <p>Quantidade</p>
              <p>{cartCount !== 1 ? `${cartCount} itens` : `${cartCount} item`}</p>
            </span>
            <span>
              <strong>Total</strong>
              <strong>{formattedTotalPrice}</strong>
            </span>
          </CartDetails>
        </CartContent>   

        <BuyButton disabled={isBuyButtonDisabled}>
          Finalizar Compra
        </BuyButton>
      </Content>
    </Dialog.Portal>
  )
}