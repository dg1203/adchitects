import React from "react";
import { IPage, ISection, ISinglePage } from "types";
import { useQuery } from "react-query";
import Api from "api";
import { PageLoader } from "components/atoms/PageLoader";
import { Sections } from "utils";

interface IProps {
  page: IPage;
}

const Homepage:React.FC<IProps> = ({ page }) => {
  const { data, isLoading } = useQuery<ISinglePage>(["page", page.id], () => Api.getPage(page.id));

  return (
    <>
      {
        isLoading || !data ? <PageLoader/>
          : (
            data && data.sections.map((section: ISection) => (
              section.type && Sections[section.type] &&
              React.createElement(Sections[section.type], {key: section.type, ...section})
            ))
          )
      }
    </>
  );
}

export default Homepage;
