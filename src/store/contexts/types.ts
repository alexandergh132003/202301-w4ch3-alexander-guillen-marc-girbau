interface PhoneContextStructure {
  phoneNumber: string;
  isCalling: boolean;
  setIsCallingTrue: () => void;
  setIsCallingFalse: () => void;
  appendNumber: (key: string) => void;
  deletePhoneNumber: () => void;
}

export default PhoneContextStructure;
