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
import { Pastas } from "shared/interface";

// Store
import { OrderContext } from "store/context";

// Repositories
import { pastaRepository } from "repositories";

const SelectPasta = () => {
  const history = useHistory();

  const { order, setOrder } = useContext(OrderContext);
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

    if (pastaDetail !== undefined) {
      pastaDetail?.recommendation &&
        alert("Recomendação do dia, você acaba de receber pontos de benefício");

      setOrder({ ...order, ["pastas"]: pastaDetail?.id });
      history.push("/selecionar/tamanho");
    } else alert("Selecione uma opção");
  };

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <Title>
          Selecione a massa
          {pastaDetail?.recommendation && (
            <Recommendation>Recomendação do dia</Recommendation>
          )}
        </Title>

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
