import React from "react";

// Hooks
import { useMoneyFormat } from "hooks";

// Private
import { Container, Column, Prefix, Title, Text, Price } from "./styles";

interface LayoutProps {
  data: {
    size?: number;
    title?: string;
    price?: number;
    slices?: number;
    description?: string;
  };
  prefix?: string;
}

const PizzaItem: React.FC<LayoutProps> = (props) => {
  const {
    data: { title, price, size, slices, description },
    prefix,
  } = props;

  const hasDescription = Boolean(description?.length);

  return (
    <Container>
      {prefix && <Prefix>{prefix}</Prefix>}
      <Column>
        <Title>{title}</Title>
        <Text>
          {hasDescription ? description : `${size}cm e ${slices} pedaços`}
        </Text>
      </Column>
      <Price>{useMoneyFormat(Number(price))}</Price>
    </Container>
  );
};

export default PizzaItem;
