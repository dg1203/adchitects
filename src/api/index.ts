import axios from "axios";
import { IPage, ISinglePage } from "types";

const api = axios.create({
  baseURL: "https://adchitects-cms.herokuapp.com/",
  headers: {
    Authorization: `Basic ${btoa('adchitects:jsrulezzz')}`,
  },
});

const Api = {
  getPages: async () => {
    const response = await api.get<IPage[]>("pages");
    return response.data;
  },
  getPage: async (id: string) => {
    const response = await api.get<ISinglePage>(`page/${id}`);
    return response.data;
  },
  sendEmail: async (email: string) => api.post("newsletter", { email }),
}

export default Api;
