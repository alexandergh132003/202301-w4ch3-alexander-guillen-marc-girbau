import { useState } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";
import PhoneContextStructure from "../../store/contexts/types";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState(2);

  const store = { phoneNumber };

  return (
    <PhoneContext.Provider
      value={store}
      children={children}
    ></PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
