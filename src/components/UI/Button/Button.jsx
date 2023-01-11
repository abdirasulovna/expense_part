import "./Button.css";

export const Button = (props) => {
  return (
    <button className={props.buttonStyle} onClick={props.onClick} disabled={props.disabled}>
      {props.title}
    </button>
  );
};
