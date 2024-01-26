"use client"
import {React, useState } from 'react';
import ExpressionForm from './Components/Pro';

const page = () => {
  const [expressions, setExpressions] = useState([]);
  const [combinator, setCombinator] = useState('and');

  const addExpression = (newExpression) => {
    setExpressions([...expressions, newExpression]);
  };

  const deleteExpression = (index) => {
    const newExpressions = [...expressions];
    newExpressions.splice(index, 1);
    setExpressions(newExpressions);
  };

  const generateOutput = () => {
    const output = {
      rules: expressions.map(({ ruleType, operator, value, score }) => ({
        key: ruleType.toLowerCase().replace(' ', '_'),
        output: {
          value: parseFloat(value),
          operator,
          score: parseInt(score),
        },
      })),
      combinator,
    };
    console.log(output);
    // You can use 'output' for further processing or API calls.
  };

  return (
    <div className="container mt-5">
      <h1>Expression Engine</h1>
      <ExpressionForm addExpression={addExpression} />
      {expressions.map((expression, index) => (
        <div key={index} className="card mt-3">
          <div className="card-body">
            <p>{`Expression ${index + 1}`}</p>
            <p>{`Rule Type: ${expression.ruleType}`}</p>
            <p>{`Operator: ${expression.operator}`}</p>
            <p>{`Value: ${expression.value}`}</p>
            <p>{`Score: ${expression.score}`}</p>
            <button className="btn btn-danger" onClick={() => deleteExpression(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="mt-3">
        <label htmlFor="combinator" className="form-label">
          Combinator:
        </label>
        <select
          className="form-select"
          id="combinator"
          value={combinator}
          onChange={(e) => setCombinator(e.target.value)}
        >
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={generateOutput}>
        Generate Output
      </button>
    </div>
  );
};

export default page;
