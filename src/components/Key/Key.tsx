interface KeyProps {
  className: string;
  text: string;
}

const Key = ({ className, text }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className={`key ${className}`}>{text}</button>
    </li>
  );
};

export default Key;
