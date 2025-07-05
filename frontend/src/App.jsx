import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import './index.css'


function App() {
  const [businessData, setBusinessData] = useState(null);
  const [formValues, setFormValues] = useState(null);

  const handleFormSubmit = async (values) => {
    setFormValues(values);
    const res = await fetch('https://growthpro-backend-9ef5.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setBusinessData(data);
  };

  const handleRegenerate = async () => {
    if (!formValues) return;
    const res = await fetch(
      `https://growthpro-backend-9ef5.onrender.com/regenerate-headline?name=${formValues.name}&location=${formValues.location}`
    );
    const { headline } = await res.json();
    setBusinessData((prev) => ({ ...prev, headline }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center justify-start dashboard-container">
      <h1 className="main-heading text-4xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow dashboard-title">
        Mini Local Business Dashboard
      </h1>

      <div className="form-wrapper">
        <BusinessForm onSubmit={handleFormSubmit} />
      </div>

      <div className="card-wrapper">
        <BusinessCard data={businessData} onRegenerate={handleRegenerate} />
      </div>
    </div>
  );
}

export default App;
