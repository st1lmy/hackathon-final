import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const anonymizeText = async (text) => {
  const { data } = await axios.post(`${API_URL}/text`, { text });
  return data.anonymized;
};

export const anonymizeImage = async (file) => {
  const form = new FormData();
  form.append("file", file);
  const res = await axios.post(`${API_URL}/image`, form, {
    responseType: "blob",
  });
  return res.data;
};
