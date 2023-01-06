import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("Loan applications dashboard view", () => {

  test("displays the first loan application data", () => {
    render(<App />);
    screen.getByText("Alice Jones");
    
  });

  test("displays the loan data in tabular format", () => {
    render(<App />);
    screen.getByText("Client Details");
    screen.getByText("Loan Amount");
  });

  test("render loan data in json to display on browser", () => {
    render(<App />);
    screen.getByText("Alice Jones");
    screen.getByText("Daffy Duck");
    screen.getByText("Count Dracula");
  });

});
