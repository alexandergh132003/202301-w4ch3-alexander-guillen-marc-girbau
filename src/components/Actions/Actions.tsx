import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";
import Action from "../Action/Action";
import "./Actions.css";

const Actions = () => {
  const {
    isCalling,
    phoneNumber,
    setIsCallingTrue,
    setIsCallingFalse,
    deletePhoneNumber,
  } = useContext(PhoneContext);

  const handlerOnClickEventTrue = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (phoneNumber.length < 9) {
      return;
    }

    setIsCallingTrue();

    setTimeout(setIsCallingFalse, 5000);
  };

  const handleOnClickEventFalse = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsCallingFalse();
    deletePhoneNumber();
  };

  return isCalling ? (
    <Action
      href={"hang-up"}
      className={"hang active"}
      innerText={"Hang up"}
      anchorOnClick={handleOnClickEventFalse}
    />
  ) : (
    <Action
      href={"call"}
      className={`call ${phoneNumber.length === 9 ? "active" : ""}`}
      innerText={"Call"}
      anchorOnClick={handlerOnClickEventTrue}
    />
  );
};

export default Actions;
