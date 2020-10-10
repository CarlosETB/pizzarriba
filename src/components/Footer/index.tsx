import React from "react";

// Native
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Shared
import { Icon } from "shared/images";

// Private
import { FooterBase, Image, Text } from "./styles";

const Footer = () => {
  const { t } = useTranslation("Footer");

  return (
    <FooterBase>
      <Link to="/">
        <Image alt="Logo" src={Icon} />
      </Link>
      <Text>
        <a href="https://www.youtube.com/watch?v=jqpOAzmG1xs" target="_blank">
          Inspiração do projeto
        </a>
      </Text>
    </FooterBase>
  );
};

export default Footer;
