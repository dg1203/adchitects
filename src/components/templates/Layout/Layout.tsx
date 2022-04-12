import React from 'react';
import { IPage } from "types";
import Header from "components/organisms/Header";

interface IProps {
  children: React.ReactNode;
  pages: IPage[];
};

const Layout: React.FC<IProps> = ({ children , pages}) => (
  <>
    <Header pages={pages} />
    {children}
  </>
);

export default Layout;
