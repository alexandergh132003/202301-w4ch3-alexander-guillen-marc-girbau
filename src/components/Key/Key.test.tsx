import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhoneContext from "../../store/contexts/PhoneContext";
import Key from "./Key";

describe("Given the Key component", () => {
  describe("When it is rendered with the text `2`", () => {
    test("Then it should show a key button with the `2 text`", () => {
      const text = "2";

      render(<Key className="" text={text} />);
      const keyButton = screen.getByRole("button", { name: "2" });

      expect(keyButton).toBeInTheDocument();
    });
  });

  describe("When clicked", () => {
    test("Then it should call the function", () => {
      const text = "3";
      const action = jest.fn();

      const data = {
        phoneNumber: "7",
        isCalling: false,
        setIsCallingTrue: () => {},
        setIsCallingFalse: () => {},
        appendNumber: action,
        deletePhoneNumber: () => {},
      };

      render(
        <PhoneContext.Provider value={data}>
          <Key className="" text={text} />
        </PhoneContext.Provider>
      );

      const keyButton = screen.getByRole("button", { name: "3" });
      userEvent.click(keyButton);

      expect(action).toHaveBeenCalled();
    });
  });
});
