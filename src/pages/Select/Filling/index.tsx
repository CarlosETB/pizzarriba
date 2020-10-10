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
import { Fillings } from "shared/interface";

// Store
import { OrderContext } from "store/context";

// Repositories
import { fillingRepository } from "repositories";

const SelectFilling = () => {
  const history = useHistory();

  const { order, setOrder } = useContext(OrderContext);
  const [fillings, setFillings] = useState<Fillings[]>([]);
  const [fillingDetail, setFillingDetail] = useState<Fillings>();

  const fillingsTitles = fillings.map(({ title }) => title);

  useEffect(() => {
    fillingRepository.getAll().then((res) => {
      setFillings(res);
    });
  }, []);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const fillingID = fillings.find((res: Fillings) => {
      return res.title === value;
    });

    console.log("dede", fillingDetail?.title);

    setFillingDetail(fillingID);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fillingDetail !== undefined) {
      setOrder({ ...order, ["fillings"]: fillingDetail?.id });
      history.push("/finalizar");
    } else alert("Selecione uma opção");
  };

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <Title>
          Selecione o tamanho
          {fillingDetail?.recommendation && (
            <Recommendation>Recomendação do dia</Recommendation>
          )}
        </Title>

        <FormField
          name="fillings"
          label="Recheio"
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
