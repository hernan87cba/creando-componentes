(function main() {
  class BackButtonCustom extends HTMLElement {
    constructor() {
      super();
      const template = `
      <style>
      button {
        width: 100%;
        height: 55px;
        background-color: white;
        border: solid 2px black;
        border-radius: 4px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 22px;
      }
      button:hover{
        background-color: #240533ff;  
        color: white;
        border: none;
        cursor: pointer;
      }
      </style>
      <button>Volver</button>`;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template;
    }
  }
  customElements.define("back-button-custom", BackButtonCustom);
})();
