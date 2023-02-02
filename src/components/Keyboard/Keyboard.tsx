import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = (): JSX.Element => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  return (
    <ol className="keyboard">
      {keys.map((key, position) => (
        <Key className={position === keys.length - 1 ? "big" : ""} text={key} />
      ))}
    </ol>
  );
};

export default Keyboard;
