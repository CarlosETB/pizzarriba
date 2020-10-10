import styled from "styled-components";

export const Title = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: capitalize;
  justify-content: space-between;
`;

export const Recommendation = styled.span`
  font-size: 20px;
  color: var(--white);
  padding: 5px 10px;
  border-radius: 10px;
  background: var(--secondary);
`;

export const TotalValue = styled.span`
  width: 100%;
  font-size: 20px;
  padding: 10px 0;
  text-align: right;
`;
