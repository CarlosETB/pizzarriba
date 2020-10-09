import React, { useEffect } from "react";

// Components
import PageDefault from "components/PageDefault";
import Completed from "components/Completed";
import { Title } from "components/Text";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <PageDefault>
      <Title>Pizza do dia</Title>
      {/* <Completed data={} /> */}
    </PageDefault>
  );
};

export default Home;
