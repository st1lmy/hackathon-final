import { useState } from "react";
import { anonymizeText } from "../utils/api";

export function TextAnonymizer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const handle = async () => setResult(await anonymizeText(text));
  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handle}>Анонимизировать</button>
      <pre>{result}</pre>
    </div>
  );
}
