import axios from "axios";

const API_BASE_URL = "https://bikeindex.org:443/api/v3";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
