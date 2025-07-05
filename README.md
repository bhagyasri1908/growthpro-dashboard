# 🚀 GrowthProAI – Mini Local Business Dashboard

This is a full-stack application that allows local businesses to generate an SEO-friendly headline based on their name and location. It includes a form to input business details, shows a rating and reviews, and supports headline regeneration.

---

## 🛠️ Tech Stack

- **Frontend:** React, CSS (with Tailwind optional), Vite
- **Backend:** Node.js, Express
- **Deployment:** Vercel (frontend), Render (backend)

---

## 🔗 Live Demo

- **Frontend:** [growthpro-dashboard-eight.vercel.app](https://growthpro-dashboard-eight.vercel.app)
- **Backend:** [growthpro-backend-9ef5.onrender.com](https://growthpro-backend-9ef5.onrender.com)

---

## 📦 Folder Structure

growthpro-dashboard/
├── frontend/ # React frontend with form, card, spinner
│ └── src/
│ ├── components/
│ │ ├── BusinessForm.jsx
│ │ ├── BusinessCard.jsx
│ │ └── Spinner.jsx
│ ├── context/
│ ├── App.jsx
│ └── main.jsx
├── backend/ # Express backend server with two endpoints
│ ├── index.js
│ └── package.json

## 🧑‍💻 Running Locally

### 🔹 Frontend

cd frontend
npm install
npm run dev
Visit: http://localhost:5173

🔹 Backend

cd backend
npm install
node index.js

Visit: http://localhost:3000

⚙️ API Endpoints
POST /business-data
Request:
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
Response:
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
GET /regenerate-headline?name=Cake & Co&location=Mumbai
Response:

{
  "headline": "How Cake & Co Became a Local Favorite in Mumbai"
}

✅ Features
SEO headline generation from business name and location

Regenerate headline using backend logic

Spinner while loading responses

Input validation to prevent empty fields

Clean UI with gradients and modern styles

Fully deployed backend & frontend



📝 License
This project is for educational and recruitment purposes.

----
