import * as Dialog from '@radix-ui/react-dialog'
import { styled } from "..";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
})

export const Content = styled(Dialog.Content, {
  position: "fixed",
  maxWidth: "24rem",
  maxHeight: "calc(100vh - 6rem)",
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  padding: "4.5rem 3rem 1.5rem 3rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
})

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  
  background: "transparent",
  border: "none",
  cursor: "pointer",
  
  svg: {
    color: "$gray400"
  }
})

export const BuyButton = styled("button", {
  padding: "1.25rem 7.7rem",
  border: "none",
  borderRadius: 8,

  fontSize: "$md",
  fontWeight: 700,
  lineHeight: "160%",
  color: "$white",
  backgroundColor: "$green500",
  cursor: "pointer",
})

export const CartContent = styled(Dialog.Description, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "2rem",
  marginBottom: "3.44rem",
  height: "100%",

  div: {
    color: "$gray100",
    lineHeight: "160%",
    fontSize: "$md",

    "&:last-child": {
      display: "flex",
      flexDirection: "column",
      gap: 3,

      span: {
        display: "flex",
        justifyContent: "space-between",


      }
    }
  }
})

export const Product = styled("div", {
  display: "flex",
  gap: "1.25rem",

  div: {
    borderRadius: 8,
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  },

  span: {
    display: "flex",
    flexDirection: "column",
    gap: 6,

    button: {
      all: "unset",
      color: "$green500",
      cursor: "pointer",
    }
  }
})