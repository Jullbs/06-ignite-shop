import { styled } from "..";

export const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  variants: {
    content: {
      center: {
        justifyContent: "center",
      },
      spaceBetween: {
        justifyContent: "space-between",
      }
    }
  },

  button: {
    all: "unset",
    display: "flex",
    padding: "0.75rem",
    borderRadius: 6,
    backgroundColor: "$gray800",

    "&:hover": {
      cursor: "pointer",
    },

    svg: {
      color: "$gray400",
    },

    p: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      verticalAlign: "",
      textAlign: "center",
      marginLeft: "1.2rem",
      marginTop: "-1.2rem",

      lineHeight: "160%",
      width: "1.5rem",
      borderRadius: "1rem",
      border: "3px solid $gray900",

      fontSize: "0.875rem",
      fontWeight: 700,

      color: "$white",
      backgroundColor: "$green500",
    }
  }
})