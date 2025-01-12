const Button = ({ text, color, children }) => {
  //console.log(props);

  //event handler
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'black',
};

export default Button;
