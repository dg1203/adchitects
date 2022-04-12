interface IPage {
  url: string;
  id: string;
}

interface ISection {
  type?: string;
  text: string;
  img?: string;
  author?: string;
}

interface ISinglePage extends IPage{
  sections: ISection[];
}

export type { IPage, ISinglePage, ISection };
