import axios from "axios";

const api = axios.create({
  baseURL: "https://adchitects-cms.herokuapp.com/",
  headers: {
    Authorization: `Basic ${btoa('adchitects:jsrulezzz')}`,
  },
});

const Api = {
  getPages: async () => api.get("pages"),
  getPage: async (id: string) => api.get(`page/${id}`),
  sendEmail: async (email: string) => api.post("newsletter", { email }),
}

export default Api;
