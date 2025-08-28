(function main() {
  class HeaderCustom extends HTMLElement {
    constructor() {
      super();
      const template = `
      <style>
        :host{
          width: 100%;
          height: 60px;
          background-color: #ff8282;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 22px;
        }

        @media (min-width: 768px) {
        :host{ height: 80px; }
        }
      
      </style>
      <header>Header</header>
      `;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template; // Agregamos el template al shadow DOM
    }
  }
  customElements.define("header-custom", HeaderCustom);
})();
