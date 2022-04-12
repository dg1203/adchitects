import React from "react";
import { useLocation } from "react-router-dom";
import { IPage } from "types";
import Link from "components/molecules/Link";
import { Ul, Li } from "components/atoms/List";
import { Nav } from "components/atoms/Nav";
import { getNavigationLabel } from "utils";

interface IProps {
  pages: IPage[];
}

const Navigation:React.FC<IProps> = ({ pages }) => {
  const { pathname } = useLocation();
  return (
    <Nav>
      <Ul>
        {
          pages.map((page) => (
            <Li key={page.id}>
              <Link isActive={pathname === page.url} url={page.url} label={getNavigationLabel(page.url)} />
            </Li>
          ))
        }
      </Ul>
    </Nav>
  );
}

export default Navigation;
