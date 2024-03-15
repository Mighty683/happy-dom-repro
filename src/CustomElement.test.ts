import { expect, describe, it } from "vitest";

import "./CustomElement";

describe("CustomElement", () => {
  it("should update the button when the attribute is changed", async () => {
    const element = document.createElement("custom-element");
    document.body.appendChild(element);
    element.setAttribute("value", "2");
    expect(element.shadowRoot?.querySelector("button")?.textContent).toBe("2");
  });
});
