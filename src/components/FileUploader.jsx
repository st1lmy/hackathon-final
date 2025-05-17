import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function FileUploader({ onFile }) {
  const onDrop = useCallback((accepted) => onFile(accepted[0]), [onFile]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className="p-4 border-dashed border-2 rounded">
      <input {...getInputProps()} />
      <p>Перетащите файл или нажмите для выбора</p>
    </div>
  );
}
