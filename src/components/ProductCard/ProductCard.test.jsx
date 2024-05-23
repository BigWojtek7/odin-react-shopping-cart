import { render, screen } from "@testing-library/react";

import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

describe("Product card component", () => {
  it("renders product card", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<ProductCard />);
    expect(container).toMatchSnapshot();
  });

  it("should render a button with the text 'Add to Cart'", () => {
    // const user = userEvent.setup();

    render(<ProductCard />);
    const button = screen.getByRole("button", { name: "Add to Cart" });

    // await user.click(button);

    expect(button).toBeInTheDocument();
  });
});