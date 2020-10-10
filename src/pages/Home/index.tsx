import React, { useEffect, useState } from "react";

// Components
import { Title, TotalValue } from "components/Text";
import PageDefault from "components/PageDefault";
import { ButtonNext } from "components/Button";
import PizzaItem from "components/PizzaItem";

// Hooks
import { useMoneyFormat } from "hooks";

// Shared
import { Pastas, Fillings, Sizes } from "shared/interface";

// Repositories
import {
  sizeRepository,
  pastaRepository,
  fillingRepository,
} from "repositories";

const Home = () => {
  const [sizes, setSizes] = useState<Sizes>({});
  const [pastas, setPastas] = useState<Pastas>({});
  const [fillings, setFillings] = useState<Fillings>({});

  useEffect(() => {
    sizeRepository.getAll().then((res) => {
      const pastaRecommended = res.find((res: Sizes) => {
        return res.recommendation === true;
      });

      setSizes(pastaRecommended);
    });

    pastaRepository.getAll().then((res) => {
      const pastaRecommended = res.find((res: Pastas) => {
        return res.recommendation === true;
      });

      setPastas(pastaRecommended);
    });

    fillingRepository.getAll().then((res) => {
      const fillingRecommended = res.find((res: Fillings) => {
        return res.recommendation === true;
      });
      setFillings(fillingRecommended);
    });
  }, []);

  return (
    <PageDefault>
      <Title>Pizza do dia</Title>

      <PizzaItem prefix="tamanho" data={sizes} />
      <PizzaItem prefix="massa" data={pastas} />
      <PizzaItem prefix="recheio" data={fillings} />

      <TotalValue>
        {`Valor total: ${useMoneyFormat(
          Number(pastas?.price + sizes?.price + fillings?.price)
        )}`}
      </TotalValue>

      <ButtonNext onClick={() => alert("Pedido Finalizado")}>
        Finalizar pedido
      </ButtonNext>
    </PageDefault>
  );
};

export default Home;
