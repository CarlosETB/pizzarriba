import React from "react";

// Native
import { Link, useHistory } from "react-router-dom";

// Components
import { Button } from "components/Button";

// Shared
import { Logo } from "shared/images";

// Private
import { Container, Image } from "./styles";

const Header = () => {
  const history = useHistory();

  const handleCreate = async () => {
    history.push("/selecionar/massa");
  };

  return (
    <Container>
      <Link to="/">
        <Image src={Logo}></Image>
      </Link>

      <Button onClick={handleCreate}>Criar Pizza</Button>
    </Container>
  );
};

export default Header;
