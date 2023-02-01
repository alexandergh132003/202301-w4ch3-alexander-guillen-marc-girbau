import { useState } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const appendNumber = (key: string): void => {
    if (phoneNumber.length >= 9) {
      return;
    }

    setPhoneNumber(phoneNumber + key);
  };

  const deletePhoneNumber = (): void => {
    setPhoneNumber("");
  };

  return (
    <PhoneContext.Provider
      value={{ phoneNumber, appendNumber, deletePhoneNumber }}
      children={children}
    ></PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
