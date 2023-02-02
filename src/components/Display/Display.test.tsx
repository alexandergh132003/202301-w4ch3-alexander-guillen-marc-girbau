import PhoneContext from "../../store/contexts/PhoneContext";
import Display from "./Display";
import { render, screen } from "@testing-library/react";

import PhoneContextStructure from "../../store/contexts/types";

describe("Given a Display component", () => {
  describe("When it consumes PhoneNumberContext with 666666666", () => {
    test("It should show the consumed number", () => {
      const number = "666666666";

      const PhoneContextNum: PhoneContextStructure = {
        phoneNumber: number,
        appendNumber: () => {},
        deletePhoneNumber: () => {},
      };

      render(
        <PhoneContext.Provider value={PhoneContextNum}>
          <Display />
        </PhoneContext.Provider>
      );

      const showedNumber = screen.getByText(number);

      expect(showedNumber).toBeInTheDocument();
    });
  });
});
