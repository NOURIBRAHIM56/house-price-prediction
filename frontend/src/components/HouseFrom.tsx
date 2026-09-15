import React, { useState } from 'react';
import { getPrediction } from '../api';
import type { PredictionRequest } from '../types/house';

export default function HouseForm() {
  const [formData, setFormData] = useState<PredictionRequest>({
    location: '',
    carpet_area_sqft: 0,
    floor_num: 0,
    Bathroom_num: 0,
    Balcony_num: 0,
    Furnishing: '',
    Transaction: '',
    Ownership: '',
    facing: '',
  });

  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['carpet_area_sqft', 'floor_num', 'Bathroom_num', 'Balcony_num'].includes(name) 
        ? Number(value) 
        : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPredictedPrice(null);

    try {
      const result = await getPrediction(formData);
      setPredictedPrice(result.predicted_price);
    } catch (err: any) {
      setError('حدث خطأ أثناء التنبؤ بالسعر، تأكد أن السيرفر يعمل.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', background: '#f9f9f9', borderRadius: '8px' }}>
      <h2>House Price Prediction Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        <div>
          <label>Location: </label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Carpet Area (sqft): </label>
          <input type="number" name="carpet_area_sqft" value={formData.carpet_area_sqft} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Floor Number: </label>
          <input type="number" name="floor_num" value={formData.floor_num} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Bathroom Number: </label>
          <input type="number" name="Bathroom_num" value={formData.Bathroom_num} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Balcony Number: </label>
          <input type="number" name="Balcony_num" value={formData.Balcony_num} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Furnishing: </label>
          <input type="text" name="Furnishing" value={formData.Furnishing} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Transaction: </label>
          <input type="text" name="Transaction" value={formData.Transaction} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Ownership: </label>
          <input type="text" name="Ownership" value={formData.Ownership} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div>
          <label>Facing: </label>
          <input type="text" name="facing" value={formData.facing} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          {loading ? 'Predicting...' : 'Predict Price'}
        </button>
      </form>

      {predictedPrice !== null && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '4px' }}>
          <h3>Predicted Price: {predictedPrice}</h3>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}