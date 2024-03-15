import { expect, describe, it } from "vitest";

import "./CustomElement";

describe("CustomElement", () => {
  it("should update the button when the attribute is changed", async () => {
    document.body.innerHTML = "<custom-element count='1'></custom-element>";
    const element = document.querySelector("custom-element")!;
    document.body.appendChild(element);
    element.setAttribute("count", "2");
    expect(element.shadowRoot?.querySelector("button")?.textContent).toBe("2");
  });
});
