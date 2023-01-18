import { createContext, ReactNode, useState } from "react";

interface CartContextType {
  cart: string[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  )
}