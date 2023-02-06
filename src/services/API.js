import axios from "axios";

axios.defaults.withCredentials = false;
const apiInstance = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  timeout: 300000,
});

class API {
  send = async (params) => {
    console.log(params);
    const response = await apiInstance.get(`/13.43,52.51;13.42,52.5;13.42,52.5?waypoints=0;2&access_token=pk.eyJ1IjoiaG9lMDA3IiwiYSI6ImNsYjZ0eGUzeDAyajgzd2xra2txcW1kbzkifQ.4d_T2Q8uGzAxGrcFmECnhA`);
    console.log(response.data);
    
  }
}
// pk.eyJ1IjoiaG9lMDA3IiwiYSI6ImNsYjZ0eGUzeDAyajgzd2xra2txcW1kbzkifQ.4d_T2Q8uGzAxGrcFmECnhA
// https://api.mapbox.com/directions/v5/mapbox/driving/13.43,52.51;13.42,52.5;13.43,52.5?waypoints=0;2&access_token=pk.eyJ1IjoiaG9lMDA3IiwiYSI6ImNsYjZ0eGUzeDAyajgzd2xra2txcW1kbzkifQ.4d_T2Q8uGzAxGrcFmECnhA

export default new API();