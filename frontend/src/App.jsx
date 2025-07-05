import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import { useBusiness } from './context/BusinessContext';
import './index.css';

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [formValues, setFormValues] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state
  const [error, setError] = useState(null);      // Optional error state

  const handleFormSubmit = async (values) => {
    try {
      setFormValues(values);
      setLoading(true);
      setError(null);
      const res = await fetch('https://growthpro-backend-9ef5.onrender.com/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setBusinessData(data);
    } catch (err) {
      setError('Failed to fetch business data');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = async () => {
    if (!formValues) return;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://growthpro-backend-9ef5.onrender.com/regenerate-headline?name=${formValues.name}&location=${formValues.location}`
      );
      const { headline } = await res.json();
      setBusinessData((prev) => ({ ...prev, headline }));
    } catch (err) {
      setError('Failed to regenerate headline');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center justify-start dashboard-container">
      <h1 className="main-heading text-4xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow dashboard-title">
        Mini Local Business Dashboard
      </h1>

      <div className="form-wrapper">
        <BusinessForm onSubmit={handleFormSubmit} />
      </div>

      {loading && <div className="loader mt-6 mb-4"></div>}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="card-wrapper">
        {!loading && businessData && (
          <BusinessCard data={businessData} onRegenerate={handleRegenerate} />
        )}
      </div>
    </div>
  );
}

export default App;
