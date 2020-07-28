import React from "react";
import Logo from "../../assets/img/logo.png";
import ButtonLink from "../../components/ButtonLink";
import * as S from "./style";

const Menu = () => {
  return (
    <S.Menu className="Menu">
      <a href="/">
        <S.Logo className="Logo" src={Logo} alt="DevFlix logo" />
      </a>
      <ButtonLink className="ButtonLink" href="">
        Novo vídeo
      </ButtonLink>
    </S.Menu>
  );
};

export default Menu;
