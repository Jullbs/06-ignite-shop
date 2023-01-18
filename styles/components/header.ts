import { styled } from "..";

export const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

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
    }
  }
})