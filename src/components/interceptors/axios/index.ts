import axios from "axios";

const customURL = axios.create({
  baseURL: "http://localhost:5000/",
});
