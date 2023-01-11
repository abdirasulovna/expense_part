import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { FormInput } from "../UI/formInput/FormInput";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const enabled = title.length > 0 && price.length > 0 && date.length > 0;

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();
  
    const expenseData = {
      title,
      date,
      price,
    };

    props.onNewExpenseAdd(expenseData);
    setTitle("");
    setPrice("");
    setDate("");
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceInputChangeHandler = (event) => {
    setPrice(event.target.value);

  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="input">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите ...."
          value={title}
          onChange={titleInputChangeHandler}
          labelStyle="styledLabel"
          inputStyle="styledInput"
        />
        <FormInput
          id="price"
          labelName="Количество денег"
          inputType="number"
          placeholder=""
          value={price}
          onChange={priceInputChangeHandler}
          labelStyle="styledLabel"
          inputStyle="styledInput"
        />
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          onChange={dateInputChangeHandler}
          labelStyle="styledLabel"
          inputStyle="styledInput"
        />
      </div>
      <div className="buttonForm">
        <Button
          title="Отмена"
          onClick={cancelHandler}
          buttonStyle="formbutton"
        />
        <Button
          title="Сохранить"
          onClick={saveHandler}
          disabled={!enabled}
          buttonStyle="formbutton"
        />
      </div>
    </form>
  );
};
