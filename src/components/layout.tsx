import { ReactNode } from "react";

import { Container } from "../../styles/components/layout";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  
  return (
    <Container>
      <Header />

      {children}
    </Container>
  )
}