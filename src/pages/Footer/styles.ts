import styled from "styled-components";

export const FooterBase = styled.footer`
  background: var(--white);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  flex-direction: column;
  display: flex;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  height: 80px;
`;

export const Text = styled.span`
  font-size: 20px;
  color: var(--black);
`;
