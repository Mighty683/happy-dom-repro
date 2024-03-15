export class CustomElement extends HTMLElement {
  static get observedAttributes() {
    return ["count"];
  }
  attributeChangedCallback() {
    console.log("attributeChangedCallback called updating button");
    let button = this.shadowRoot!.querySelector<HTMLButtonElement>("#counter")!;
    button.innerHTML = this.getAttribute("count") || "0";
  }
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <button id="counter">${this.getAttribute("count")}</button>
    `;
    let button = shadow.querySelector<HTMLButtonElement>("#counter")!;
    button.addEventListener("click", () => {
      let currentValue = this.getAttribute("count");
      console.log(currentValue);
      let newValue = (parseInt(currentValue || "0") + 1).toString();
      this.setAttribute("count", newValue);
      button.innerHTML = newValue;
    });
  }
}

window.customElements.define("custom-element", CustomElement);
