interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
      <br></br>
      <button className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
