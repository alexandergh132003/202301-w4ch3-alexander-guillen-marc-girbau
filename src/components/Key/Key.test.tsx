import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhoneContext from "../../store/contexts/PhoneContext";
import PhoneContextProvider from "../PhoneContextProvider/PhoneContextProvider";
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

  describe("When it clicked", () => {
    test("Then it should call the function", () => {
      const text = "3";
      const action = jest.fn();

      render(
        <PhoneContextProvider>
          <Key className="" text={text} />
          <PhoneContext.Consumer>{action}</PhoneContext.Consumer>
        </PhoneContextProvider>
      );

      const keyButton = screen.getByRole("button", { name: "3" });
      userEvent.click(keyButton);

      expect(action).toHaveBeenCalled();
    });
  });
});
