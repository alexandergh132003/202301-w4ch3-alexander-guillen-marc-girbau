interface PhoneContextStructure {
  phoneNumber: string;
  isCalling: boolean;
  appendNumber: (key: string) => void;
  deletePhoneNumber: () => void;
}

export default PhoneContextStructure;
