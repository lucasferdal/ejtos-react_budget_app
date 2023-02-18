import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (e) => {
        const value = e.target.value;
        if (value > 20000) {
            alert("The value cannot exceed £20000");
        } else {
            setBudgetValue(value);
        }

        if (value < totalExpenses) {
            alert("The value cannot be lower than the spending");
        } else {
            setBudgetValue(value);
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}<input type="number" value={budgetValue} step={10} onChange={handleBudgetChange} max={20000} /></span>
        </div>
    );
};

export default Budget;
