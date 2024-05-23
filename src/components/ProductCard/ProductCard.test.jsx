import { render, screen } from "@testing-library/react";

import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

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
  it("should call onclick")
});

const title = "foo";
const description = "bar";
const image = "baz";
const handleClickAdd = vi.fn();
const data = 777;

describe("render card", () => {
  it("renders whole card", async () => {
    render(
      <ProductCard
        title={title}
        description={description}
        image={image}
        handleClickAdd={handleClickAdd}
        data={data}
      />
    );

    expect(screen.getByTestId("cardTitle").textContent).toBe(title)
    expect(screen.getByRole("img", { name: "Image of product" }).getAttribute("src")).toBe(image);
    expect(screen.getByTestId("cardDescription").textContent).toBe(description)

    const button = screen.getByRole("button", { name: "Add to Cart" });
    expect(button.getAttribute("data-value")).toMatch(data)

    const user = userEvent.setup()
    await user.click(button);
    expect(handleClickAdd).toHaveBeenCalled();

  });
});
