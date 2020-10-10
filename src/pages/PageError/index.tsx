import React from "react";

// Native
import { useHistory } from "react-router-dom";

// Components
import PageDefault from "components/PageDefault";
import { Button } from "components/Button";

// Private
import { Container } from "./styles";

const PageError = () => {
  const history = useHistory();

  const handleClick = async () => {
    history.push("/");
  };

  return (
    <PageDefault>
      <Container>
        <Button onClick={handleClick}>Voltar a página inicial</Button>
      </Container>
    </PageDefault>
  );
};

export default PageError;
