import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";
import "./Key.css";

interface KeyProps {
  className: string;
  text: string;
}

const Key = ({ className, text }: KeyProps): JSX.Element => {
  const { appendNumber, deletePhoneNumber, isCalling } =
    useContext(PhoneContext);

  const getAction = (text: string): void => {
    if (text === "delete") {
      deletePhoneNumber();
    } else {
      appendNumber(text);
    }
  };

  return (
    <li>
      <button
        className={`key ${className}`}
        onClick={() => getAction(text)}
        disabled={isCalling}
      >
        {text}
      </button>
    </li>
  );
};

export default Key;
