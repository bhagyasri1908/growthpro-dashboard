import { useState } from 'react';
import './BusinessForm.css';

const BusinessForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !location.trim()) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    onSubmit({ name, location });
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="business-form">
      <div>
        <label>Business Name</label>
        <div className="input-styling">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Cake & Co"
          />
        </div>
      </div>

      <div>
        <label>Location</label>
        <div className="input-styling">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Mumbai"
          />
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BusinessForm;
