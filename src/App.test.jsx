import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Loan applications dashboard view", () => {
  test("displays the first loan application data", () => {
    render(<App />);
    screen.getByText("Alice Jones");
    screen.getByText('17 Fore St, Somerset, TA21 8AA')
    screen.getByText('7.2%')
    screen.getByText('£500,000')
    screen.getByText('2022-11-15')
  });

  test("displays the second loan application data", () => {
    render(<App />);
    screen.getByText("Daffy Duck");
    screen.getByText('65 Rowlands Rd, West Sussex, BN11 3JN')
    screen.getByText('COMMERCIAL')
    screen.getByText('5.4%')
    screen.getByText('£870,000')
    screen.getByText('2022-11-16')
  });
});
