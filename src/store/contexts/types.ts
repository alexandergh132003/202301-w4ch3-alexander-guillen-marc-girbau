interface PhoneContextStructure {
  phoneNumber: string;
  appendNumber: (key: string) => void;
  deletePhoneNumber: () => void;
}

export default PhoneContextStructure;
