
// components/ResultPreview.jsx
import React from 'react';

export default function ResultPreview({ url }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Processed Image:</h3>
      <img src={url} alt="Processed" className="mt-2 border rounded" />
    </div>
  );
}