import { screen, render } from "@testing-library/react";
import Actions from "./Actions";

describe("Given an Actions component", () => {
  describe("When it renders itself", () => {
    test("It should show two anchors with 'Call' and 'Hang up' texts", () => {
      const callText = "Call";
      const hangUpText = "Hang up";

      render(<Actions />);

      const callAnchor = screen.getByText(callText);
      const hangUpAnchor = screen.getByText(hangUpText);

      expect(callAnchor).toBeInTheDocument();
      expect(hangUpAnchor).toBeInTheDocument();
    });
  });
});
