import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);

  return (
    <span className={`message ${isCalling ? "" : "off"}`}>Calling...</span>
  );
};

export default Info;
