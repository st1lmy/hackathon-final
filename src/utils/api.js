import axios from "axios";

// Адрес вашего бэкенда из .env.local
const API = import.meta.env.VITE_API_URL;

// Функция для анонимизации текста
export async function anonymizeText(text) {
  const response = await axios.post(`${API}/text`, { text });
  return response.data.anonymized;
}

// Функция для анонимизации изображений
export async function anonymizeImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API}/image`, formData);
  return response.data.text;
}
