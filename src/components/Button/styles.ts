import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  padding: 16px 24px;
  font-style: normal;
  color: var(--primary);
  text-decoration: none;
  display: inline-block;
  box-sizing: border-box;
  transition: opacity 0.3s;
  background: var(--transparent);
  border: 1px solid var(--primary);
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
