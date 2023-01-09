import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const processText = (newPost) => API.post("/process", newPost);

export const fun=()=>API.get("/");