import React from "react";

// Native
import { Link } from "react-router-dom";

// Components
import { Button } from "components/Button";

// Shared
import { Logo } from "shared/images";

// Private
import { Container, Image } from "./styles";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Image src={Logo}></Image>
      </Link>

      <Button>Criar Pizza</Button>
    </Container>
  );
};

export default Header;
