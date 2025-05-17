import React, { useState } from "react";
import { anonymizeText, anonymizeImage } from "../utils/api";

export default function AnonymizationPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState(null);
  const [imageResult, setImageResult] = useState("");

  // Обработчик текстовой анонимизации
  const handleTextAnonymize = async () => {
    const anonymized = await anonymizeText(text);
    setResult(anonymized);
  };

  // Обработчик загрузки изображения
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Обработчик анонимизации изображения
  const handleImageAnonymize = async () => {
    if (!image) return;
    const anonymizedText = await anonymizeImage(image);
    setImageResult(anonymizedText);
  };

  return (
    <div>
      <h2>Анонимизация текста</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст..."
        rows="4"
      />
      <button onClick={handleTextAnonymize}>Анонимизировать текст</button>
      <pre>{result}</pre>

      <h2>Анонимизация изображения</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleImageAnonymize}>
        Анонимизировать изображение
      </button>
      <pre>{imageResult}</pre>
    </div>
  );
}
