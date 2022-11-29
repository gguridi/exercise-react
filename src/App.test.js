import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("basic print", () => {
    let rendered;

    beforeEach(() => {
      rendered = render(<App />);
    });

    it("shows powered by text", () => {
      expect(rendered.container.textContent).toContain("PoweredBy");
    });

    it("shows link to library", () => {
      const link = screen.getByText("React Sudoku Component");
      expect(link).toHaveAttribute("href", "https://sunnanv.github.io/react-sudoku-component/");
    });
  });
});
