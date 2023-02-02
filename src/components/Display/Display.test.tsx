import PhoneContext from "../../store/contexts/PhoneContext";
import PhoneContextProvider from "../PhoneContextProvider/PhoneContextProvider";
import Display from "./Display";
import { render, screen } from "@testing-library/react";

describe("Given a Display component", () => {
  describe("When it consumes PhoneNumberContext with 666666666", () => {
    test("It should show the consumed number", () => {
      const number = "666666666";

      render(
        <PhoneContextProvider>
          <Display />
          <PhoneContext.Consumer>{(value) => number}</PhoneContext.Consumer>
        </PhoneContextProvider>
      );

      const showedNumber = screen.getByText(number);

      expect(showedNumber).toBeInTheDocument();
    });
  });
});
