import React, { useState } from 'react';

const ExpressionForm = ({ addExpression }) => {
  const [ruleType, setRuleType] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation goes here

    const newExpression = {
      ruleType,
      operator,
      value,
      score,
    };

    addExpression(newExpression);

    // Reset form fields
    setRuleType('');
    setOperator('');
    setValue('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="ruleType" className="form-label">
          Rule Type:
        </label>
        <select
          className="form-select"
          id="ruleType"
          value={ruleType}
          onChange={(e) => setRuleType(e.target.value)}
        >
          <option value="">Select Rule Type</option>
          <option value="Age">Age</option>
          <option value="Credit Score">Credit Score</option>
          <option value="Account Balance">Account Balance</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="operator" className="form-label">
          Operator:
        </label>
        <select
          className="form-select"
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="">Select Operator</option>
          <option value=">">Greater Than</option>
          <option value="<">Less Than</option>
          <option value="≥">Greater Than or Equal To</option>
          <option value="≤">Less Than or Equal To</option>
          <option value="=">Equal To</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="value" className="form-label">
          Value:
        </label>
        <input
          type="text"
          className="form-control"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="score" className="form-label">
          Score:
        </label>
        <input
          type="text"
          className="form-control"
          id="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Expression
      </button>
    </form>
  );
};

export default ExpressionForm;
