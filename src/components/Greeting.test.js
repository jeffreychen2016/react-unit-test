import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hellow World as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const outputElment = screen.getByText("It is good to see you!");
    expect(outputElment).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElment = screen.getByRole("button");
    userEvent.click(buttonElment);

    // Assert
    const outputElment = screen.getByText("Changed!");
    expect(outputElment).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElment = screen.getByRole("button");
    userEvent.click(buttonElment);

    // Assert
    const outputElment = screen.queryByText("It is good to see you!");
    expect(outputElment).toBeNull();
  });
});
