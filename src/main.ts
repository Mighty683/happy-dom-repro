import "./CustomElement";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <custom-element count="1"></custom-element>
`;

setTimeout(() => {
  console.log("changed button!");
  document.querySelector<HTMLDivElement>("custom-element")!.setAttribute("count", "200000");
}, 2000);
