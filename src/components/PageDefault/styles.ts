import styled from "styled-components";

export const Main = styled.main`
  padding: 5%;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--white);
  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;
