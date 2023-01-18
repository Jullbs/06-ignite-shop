import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  marginLeft: "auto",
  minHeight: 656,
})

export const Product = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
  borderRadius: 8,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  img: {
    objectFit: "cover",
    cursor: "pointer",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 6,

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    div:{
      display: "flex",
      flexDirection: "column",
    },

    strong: {
      fontSize: "$lg",
      color: "$gray100",
      lineHeight: "160%",      
    },

    span: {
      marginTop: "0.25rem",
      lineHeight: "140%", 
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    button: {
      all: "unset",
      display: "flex",
      padding: "0.75rem",
      borderRadius: 6,
      backgroundColor: "$green500",
      cursor: "pointer",
    },

    svg: {
      color: "$white",
    }
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    }
  }
})