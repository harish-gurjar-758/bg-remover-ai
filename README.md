<<<<<<< HEAD
# bg-remover-ai
This project is a background remover from image and gif and image quality enhancer. This is a MERN Stack and Python AI Project.
=======
AI Background Remover & Enhancer Web App
This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Python (FastAPI) that allows users to:

Remove background from images, GIFs, and videos.

Enhance image quality (AI-based).

Authenticate with email, Google, or Instagram.

Enjoy a futuristic, responsive UI for all devices.

🛠️ Technologies

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Python AI Server: FastAPI, OpenCV, rembg, Pillow

Authentication: JWT, Google OAuth, Instagram Login

🚀 Features

✅ Upload images, videos, or GIFs

✅ AI-powered background removal (local processing)

✅ Image enhancement (super-resolution using OpenCV)

✅ Email + OAuth login system

✅ Full mobile & desktop responsiveness

✅ No third-party background removal APIs

📁 Project Structure

bg-remover-ai/
├── client/ # React frontend
├── server/ # Node.js/Express backend
├── python-ai/ # FastAPI + AI logic
├── .env.example # Environment config
└── README.md

⚙️ Installation

Clone the repository and install all dependencies:

git clone https://github.com/your-username/bg-remover-ai.git
cd bg-remover-ai

1️⃣ Backend Setup (Node.js)

cd server
npm install
cp ../.env.example .env # then edit .env with your values
npm start

2️⃣ Python AI Server

cd ../python-ai
pip install -r requirements.txt
python main.py

3️⃣ Frontend Setup (React)

cd ../client
npm install
npm start

🌐 Local URLs

React frontend → http://localhost:3000

Node API backend → http://localhost:5000

FastAPI AI server → http://localhost:8000

🧪 Test Credentials

You can register normally or use social login (Google or Instagram) when configured.

🧰 API Routes Summary

Frontend talks to:

Node API: /api/auth, /api/upload, /api/remove-bg, etc.

Python AI: /remove-bg, /enhance-image, /remove-bg-gif-video

✅ Image processing is handled fully locally — no third-party AI services.

🛡️ Environment (.env)

Example server/.env:

MONGO_URI=mongodb://localhost:27017/bg-remover-db
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000

🧩 Production Build

To prepare for deployment:

cd client
npm run build

Then host /client/build folder on your preferred frontend host (e.g. Vercel, Netlify).

Deploy Node and Python servers separately (e.g., Render, Railway, VPS).

📝 License
>>>>>>> e6e57676 (.)
