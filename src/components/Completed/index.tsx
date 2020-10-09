import React, { useEffect } from "react";

// Private
import { Container } from "./styles";

interface LayoutProps {
  data: {
    sizesID?: number;
    pastasID?: number;
    fillingID?: number;
  };
}

const Completed: React.FC<LayoutProps> = (props) => {
  const { sizesID, pastasID, fillingID } = props;

  useEffect(() => {}, []);

  return <Container></Container>;
};

export default Completed;
