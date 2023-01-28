import { Button, ButtonWithDisable } from "../components/Button";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const onClickMock = jest.fn();

const defaultProps = {
  label: "Test",
  onClick: onClickMock,
  variant: "primary",
  disabled: false,
};

const renderButton = (customProps = {}) => {
  const componentProps = { ...defaultProps, ...customProps };
  render(<Button {...componentProps} />);
};

describe("Button", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("label", () => {
    it("Renders with the correct label", () => {
      renderButton();

      expect(screen.getByTestId("button")).toBeVisible();
    });
  });
  describe("variant", () => {
    it("Applies the button-{variant} class to the ", () => {
      renderButton();

      expect(screen.getByTestId("button")).toBeVisible();
    });
  });

  describe("onClick()", () => {
    it("If !disabled, calls onClick when clicked", () => {
      renderButton();
      fireEvent.click(screen.getByTestId("button"));

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    // this test *must* render manually to enforce the disabled prop
    it("If disabled, *does not call* onClick when clicked", () => {
      renderButton({ disabled: true });
      fireEvent.click(screen.getByTestId("button"));

      expect(onClickMock).toHaveBeenCalledTimes(0);
    });
  });
});
