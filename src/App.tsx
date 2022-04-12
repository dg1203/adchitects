import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import Api from "api";
import { PageLoader } from "./components/atoms/PageLoader";

import Layout from 'components/templates/Layout';
import Homepage from "pages/Homepage";
import {IPage} from "./types";

const App: React.FC = () => {
  const { data, isLoading } = useQuery("pages", Api.getPages);
  return (
    isLoading || !data ? <PageLoader />
      : (
        <Layout pages={data.data}>
          <Routes>
            {
              data.data.map((page: IPage) => (
                <Route key={page.id} path={page.url} element={<Homepage page={page} />} />
              ))
            }
          </Routes>
        </Layout>
      )
  );
}

export default App;
