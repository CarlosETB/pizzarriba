import React, { ReactNode } from "react";

// Components
import Header from "components/Header";
import Footer from "components/Footer";

// Private
import { Main } from "./styles";

interface LayoutProps {
  children?: ReactNode;
}

const PageDefault: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
