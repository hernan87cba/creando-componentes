(function main() {
  class FooterCustom extends HTMLElement {
    constructor() {
      super();
      const template = `
      <style>
      :host {
        width: 100%;
        height: 233px;
        background-color: #ffa0ea;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 22px;
      }
      </style>
      <footer>Footer</footer>
      
      `;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template; // Agregamos el template al shadow DOM
    }
  }
  customElements.define("footer-custom", FooterCustom);
})();
