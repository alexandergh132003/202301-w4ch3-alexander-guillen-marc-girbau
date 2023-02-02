import { useState } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(true);

  const appendNumber = (key: string): void => {
    if (phoneNumber.length >= 9) {
      return;
    }

    setPhoneNumber(phoneNumber + key);
  };

  const deletePhoneNumber = (): void => {
    setPhoneNumber("");
  };

  const setIsCallingTrue = (): void => {
    setIsCalling(true);
  };

  const setIsCallingFalse = (): void => {
    setIsCalling(false);
  };

  return (
    <PhoneContext.Provider
      value={{
        phoneNumber,
        isCalling,
        setIsCallingFalse,
        setIsCallingTrue,
        appendNumber,
        deletePhoneNumber,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
