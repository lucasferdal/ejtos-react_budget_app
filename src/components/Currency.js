import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency() {
  const [selectedCurrency, setSelectedCurrency] = useState('$'); // moneda por defecto
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  return (
    <div className="alert alert-secondary">
      <select
        onChange={handleCurrencyChange}
        class="form-select form-select-sm" aria-label=".form-select-sm example"
      >
        <option selected>Currency ({selectedCurrency})</option>
        <option value="$">$Dollar</option>
        <option value="£">£Pound</option>
        <option value="€">€Euro</option>
        <option value="₹">₹Ruppee</option>
      </select>
    </div>
  );
}
