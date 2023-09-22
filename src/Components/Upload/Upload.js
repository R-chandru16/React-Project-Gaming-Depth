import React, { useState } from "react";
import "./Upload.css";

export const Upload = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div className="uploadtype">
        <div><span className="type">Upload Image</span></div>
      <input type="file" multiple onChange={handleChange} />
      <div className="ImagePreviewContainer">
        {files.map((file) => (
          <img key={file.name} src={URL.createObjectURL(file)} alt={file.name} />
        ))}
      </div>
    </div>
  );
};

