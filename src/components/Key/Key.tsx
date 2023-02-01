import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";

interface KeyProps {
  className: string;
  text: string;
}

const Key = ({ className, text }: KeyProps): JSX.Element => {
  const { appendNumber } = useContext(PhoneContext);

  const { deletePhoneNumber } = useContext(PhoneContext);

  const getAction = (text: string): void => {
    if (text === "delete") {
      deletePhoneNumber();
    } else {
      appendNumber(text);
    }
  };

  return (
    <li>
      <button className={`key ${className}`} onClick={() => getAction(text)}>
        {text}
      </button>
    </li>
  );
};

export default Key;
