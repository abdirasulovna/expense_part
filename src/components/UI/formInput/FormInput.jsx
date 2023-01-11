import React from "react";
import './FormInput.css'


export const FormInput = ({id,labelName,inputType,placeholder,value,labelStyle,inputStyle, ...rest}) => {
  return (
    <div className="container">
      <label htmlFor={id} className={labelStyle}>
        {labelName}
      </label>
      <input
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        className={inputStyle}
        {...rest}
        // value={value}
      />
    </div>
  );
};
