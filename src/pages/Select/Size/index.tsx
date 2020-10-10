import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";

// Native
import { useHistory } from "react-router-dom";

// Components
import { Title, Recommendation } from "components/Text";
import PageDefault from "components/PageDefault";
import { ButtonNext } from "components/Button";
import FormField from "components/FormField";
import PizzaItem from "components/PizzaItem";

// Shared
import { Sizes } from "shared/interface";

// Store
import { OrderContext } from "store/context";

// Repositories
import { sizeRepository } from "repositories";

const SelectSize = () => {
  const history = useHistory();

  const { order, setOrder } = useContext(OrderContext);
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

    const sizeID = sizes.find((res: Sizes) => {
      return res.title === value;
    });

    console.log("dede", sizeDetail?.title);

    setSizeDetail(sizeID);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sizeDetail !== undefined) {
      setOrder({ ...order, [Number("sizes")]: sizeDetail?.id });
      history.push("/selecionar/recheio");
    } else alert("Selecione uma opção");
  };

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <Title>
          Selecione o tamanho
          {sizeDetail?.recommendation && (
            <Recommendation>Recomendação do dia</Recommendation>
          )}
        </Title>

        <FormField
          name="sizes"
          label="Tamanho"
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
