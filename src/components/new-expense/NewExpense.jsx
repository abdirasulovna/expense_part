import React from "react";
import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import { Button } from "../UI/Button/Button";
import './NewExpense.css'

export const NewExpense = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="expense-container">
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} buttonStyle="btn" />
      )}
    </div>
  );
};
