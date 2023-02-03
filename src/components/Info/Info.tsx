import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";
import "./Info.css";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);

  return (
    <span className={`message ${isCalling ? "" : "off"}`}>Calling...</span>
  );
};

export default Info;
