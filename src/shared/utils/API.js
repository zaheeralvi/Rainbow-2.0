import axios from "axios";

export default axios.create({
  baseURL: "https://webservice.patter.com/PatterService1/",
  responseType: "json"
});

// axios.interceptors.request.use(
//   request => console
// )