// pages/Home.jsx
import React from 'react';
import UploadForm from '../components/UploadForm';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Remove Background with AI</h1>
      <UploadForm />
    </div>
  );
}
