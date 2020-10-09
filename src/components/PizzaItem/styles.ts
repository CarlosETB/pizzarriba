import styled from "styled-components";

import { Title as TitleComponent } from "components/Text";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Prefix = styled(TitleComponent)`
  flex: 1;
  width: auto;
  font-weight: 500;
`;

export const Title = styled(TitleComponent)`
  font-size: 20px;
  font-weight: 500;
`;

export const Text = styled.span`
  flex: 1;
  width: 100%;
  text-align: justify;
  text-transform: lowercase;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const Price = styled.span`
  flex: 1;
  font-size: 20px;
  text-align: right;
`;
