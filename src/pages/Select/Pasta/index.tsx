import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";

// Components
import PageDefault from "components/PageDefault";
import { ButtonNext } from "components/Button";
import FormField from "components/FormField";
import PizzaItem from "components/PizzaItem";
import { Title } from "components/Text";

// Shared
import { Pastas } from "shared/interface";

// Store
import OrderData, { OrderDataState } from "store/context";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Data", pastaDetail?.id);
  };

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <Title>Selecione a massa</Title>

        <FormField
          name="pastas"
          label="Massa"
          value={pastaDetail?.title}
          suggestions={pastasTitles}
          onChange={handleInputChange}
        />

        {pastaDetail && <PizzaItem data={pastaDetail} />}

        <ButtonNext>Próximo</ButtonNext>
      </form>
    </PageDefault>
  );
};

export default SelectPasta;
