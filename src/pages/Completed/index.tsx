import React, { useContext, useEffect, useState } from "react";

// Native
import { useTranslation } from "react-i18next";

// Components
import { Title, TotalValue } from "components/Text";
import PageDefault from "components/PageDefault";
import { ButtonNext } from "components/Button";
import PizzaItem from "components/PizzaItem";

// Hooks
import { useMoneyFormat } from "hooks";

// Shared
import { Pastas, Fillings, Sizes } from "shared/interface";

// Store
import { OrderContext } from "store/context";

// Repositories
import {
  sizeRepository,
  pastaRepository,
  fillingRepository,
} from "repositories";

const Completed = () => {
  const { t } = useTranslation(["Completed", "Default"]);
  const { order } = useContext(OrderContext);

  const [sizes, setSizes] = useState<Sizes>({});
  const [pastas, setPastas] = useState<Pastas>({});
  const [fillings, setFillings] = useState<Fillings>({});

  useEffect(() => {
    sizeRepository.getAll().then((res) => {
      const sizeSelected = res.find((res: Sizes) => {
        return res.id === order["sizes"];
      });
      setSizes(sizeSelected);
    });
    pastaRepository.getAll().then((res) => {
      const pastaSelected = res.find((res: Pastas) => {
        return res.id === order["pastas"];
      });
      setPastas(pastaSelected);
    });
    fillingRepository.getAll().then((res) => {
      const fillingSelected = res.find((res: Fillings) => {
        return res.id === order["fillings"];
      });
      setFillings(fillingSelected);
    });
  }, []);

  return (
    <PageDefault>
      <Title>{t("title")}</Title>

      <PizzaItem prefix="tamanho" data={sizes} />
      <PizzaItem prefix="massa" data={pastas} />
      <PizzaItem prefix="recheio" data={fillings} />

      <TotalValue>{`Valor total: ${useMoneyFormat(
        Number(pastas?.price + sizes?.price + fillings?.price)
      )}`}</TotalValue>

      <ButtonNext>{t("nextButton")}</ButtonNext>
    </PageDefault>
  );
};

export default Completed;
