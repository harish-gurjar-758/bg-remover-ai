
// components/UploadForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ResultPreview from './ResultPreview';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:8000/remove-bg', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResultUrl(response.data.resultUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleUpload} className="space-y-4">
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Upload & Remove Background</button>
      </form>
      {resultUrl && <ResultPreview url={resultUrl} />}
    </div>
  );
}