import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  it("renders header"),
    () => {
      const { container } = render(<Header />);
      expect(container).toMatchSnapshot();
    };

  it("should render a button with text 'Checkout'", () => {
    render(
    <BrowserRouter>
      <Header onClick={() => {}} />
    </BrowserRouter>);
    const button = screen.getByRole("button", { name: "Checkout" });
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn(() => 0);
    const user = userEvent.setup()


    render(
    <BrowserRouter>
      <Header changeCart={onClick}/>;
    </BrowserRouter>
    )
    const button = screen.getByRole("button", { name: "Checkout" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
});
});