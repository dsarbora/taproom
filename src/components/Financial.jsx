import React from "react";

function Financials(props) {
  return (
    <div>
      <p>Cash on Hand: ${props.financials.cashOnHand}</p>
      <p>Income: ${props.financials.income}</p>
      <p>Expenditures: ${props.financials.expenditures}</p>
      <p>Profit: ${props.financials.profit}</p>
    </div>
  );
}

export default Financials;
