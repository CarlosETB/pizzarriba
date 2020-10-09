import styled, { css } from "styled-components";

const ButtonStyle = css`
  outline: none;
  display: flex;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  padding: 16px 24px;
  font-style: normal;
  align-items: center;
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

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonNext = styled.button.attrs({
  type: "submit",
})`
  ${ButtonStyle};
  align-self: flex-end;
  &::after {
    margin: 0 10px;
    font-size: 20px;
    content: "\f061";
    font-weight: 900;
    font-family: "Font Awesome\ 5 Free";
  }
`;
