import React from "react";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  return (
    <ul className="lists">
      {expenses.map((element) => {
        return (
          <ExpenseItem
            key={element.title}
            title={element.title}
            price={element.price}
            date={element.date}
          />
        );
      })}
    </ul>
  );
};
