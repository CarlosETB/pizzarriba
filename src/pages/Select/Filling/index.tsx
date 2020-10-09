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
import { Fillings } from "shared/interface";

// Repositories
import { fillingRepository } from "repositories";

const SelectFilling = () => {
  const [fillings, setFillings] = useState<Fillings[]>([]);
  const [fillingDetail, setFillingDetail] = useState<Fillings>();

  const fillingsTitles = fillings.map(({ title }) => title);

  useEffect(() => {
    fillingRepository.getAll().then((res) => {
      setFillings(res);
    });
  }, []);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const fillingId = fillings.find((res: Fillings) => {
      return res.title === value;
    });

    setFillingDetail({ [name]: fillingId });
    console.log("Data", { [name]: fillingId });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Data", fillingDetail?.id);
  };

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <Title>Selecione a massa</Title>

        <FormField
          label="Pedaços"
          name="fillings"
          value={fillingDetail?.title}
          suggestions={fillingsTitles}
          onChange={handleInputChange}
        />

        {fillingDetail && <PizzaItem data={fillingDetail} />}

        <ButtonNext>Próximo</ButtonNext>
      </form>
    </PageDefault>
  );
};

export default SelectFilling;
