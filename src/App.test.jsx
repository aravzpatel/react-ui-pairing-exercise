import { describe, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/react";
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
    const DaffyDuckRow = screen.getByTestId('Daffy Duck row');
    within(DaffyDuckRow).getByText("Daffy Duck");
    within(DaffyDuckRow).getByText('65 Rowlands Rd, West Sussex, BN11 3JN')
    within(DaffyDuckRow).getByText('COMMERCIAL')
    within(DaffyDuckRow).getByText('5.4%')
    within(DaffyDuckRow).getByText('£870,000')
    within(DaffyDuckRow).getByText('2022-11-16')
  });

  test('displays only 4 rows in the table', () => {
    render(<App/>);
    const table = screen.getByRole('table');
    const tableChildren = within(table).getAllByRole('row')
    expect(tableChildren.length).toBe(5)

  })

  test('more rows are visible after clicking a button', async () => {
    render(<App/>);
    const button = screen.getByRole('button');
    await fireEvent(button, new MouseEvent('click'))
    const table = screen.getByRole('table');
    const tableChildren = within(table).getAllByRole('row')
    expect(tableChildren.length).toBeGreaterThan(5);



  })


});
