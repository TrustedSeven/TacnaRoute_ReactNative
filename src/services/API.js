import axios from "axios";

axios.defaults.withCredentials = false;
const apiInstance = axios.create({
  baseURL: "https://social360.app/edit/api",
  timeout: 300000,
});

class API {
  send = async (params) => {
    console.log(params);
    const response = await apiInstance.post(`/iniciarSession`, params);
    console.log(response.data);
    
  }
}
export default new API();