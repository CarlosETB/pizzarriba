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
import { Sizes } from "shared/interface";

// Store
import OrderData, { OrderDataState } from "store/context";

// Repositories
import { sizeRepository } from "repositories";

const SelectSize = () => {
  const [sizes, setSizes] = useState<Sizes[]>([]);
  const [sizeDetail, setSizeDetail] = useState<Sizes>();

  const sizesTitles = sizes.map(({ title }) => title);

  useEffect(() => {
    sizeRepository.getAll().then((res) => {
      setSizes(res);
    });
  }, []);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const sizeId = sizes.find((res: Sizes) => {
      return res.title === value;
    });

    setSizeDetail(sizeId);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Data", sizeDetail?.id);
  };

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <Title>Selecione a massa</Title>

        <FormField
          name="sizes"
          label="Tamanhos"
          value={sizeDetail?.title}
          suggestions={sizesTitles}
          onChange={handleInputChange}
        />

        {sizeDetail && <PizzaItem data={sizeDetail} />}

        <ButtonNext>Próximo</ButtonNext>
      </form>
    </PageDefault>
  );
};

export default SelectSize;
