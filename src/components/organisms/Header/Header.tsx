import React from "react";
import { Link } from "react-router-dom";
import { IPage } from "types";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { AppHeader } from "components/atoms/AppHeader";
import { Container, ContainerLeft } from "components/atoms/Container";
import { Button } from "components/atoms/Button";
import Navigation from "components/molecules/Navigation";

interface IProps {
  pages: IPage[];
}

const Header: React.FC<IProps> = ({ pages }) => (
  <AppHeader>
    <Container>
      <ContainerLeft>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation pages={pages} />
      </ContainerLeft>
      <Button>Contact us</Button>
    </Container>
  </AppHeader>
);

export default Header;
