import { styled } from ".."

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  div: {
    display: "flex",
    justifyContent: "center",
  },

  h1: {
    fontSize: "$2xl",
    fontColor: "$gray100",
    marginTop: "3rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300"
    }
  }
})

export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)",
  borderRadius: 1000,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "center",
  },

  "&:not(:first-child)": {
    marginLeft: "-3.3rem",
  }
})