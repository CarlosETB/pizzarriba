import React, { ChangeEvent, useEffect, useState } from "react";

// Components
import PageDefault from "components/PageDefault";
import FormField from "components/FormField";
import { Title } from "components/Text";
import PizzaItem from "components/PizzaItem";

// Shared
import { Pastas } from "shared/interface";

// Repositories
import { pastaRepository } from "repositories";

const SelectPasta = () => {
  const [pastas, setPastas] = useState<Pastas[]>([]);
  const [pastaDetail, setPastaDetail] = useState<Pastas>();
  const pastasTitles = pastas.map(({ title }) => title);

  useEffect(() => {
    pastaRepository.getAll().then((res) => {
      setPastas(res);
    });
  }, []);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const pastaId = pastas.find((res: Pastas) => {
      return res.title === value;
    });

    setPastaDetail(pastaId);
  };

  return (
    <PageDefault>
      <Title>Selecione a massa</Title>

      <FormField
        name="pastas"
        label="Massa"
        value={pastaDetail?.title}
        onChange={handleInputChange}
        suggestions={pastasTitles}
      />

      {pastaDetail && <PizzaItem data={pastaDetail} />}
    </PageDefault>
  );
};

export default SelectPasta;
