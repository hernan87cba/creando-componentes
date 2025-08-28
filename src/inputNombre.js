(function main() {
  class InputNombreCustom extends HTMLElement {
    constructor() {
      super();
      const template = `<style>
      label {
        width: 100%;
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        }
        
        input {
        box-sizing: border-box;
        width: 100%;
        display: block;
        padding: 17px 13px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: black;
        border: solid 2px black;
        border-radius: 4px;
      }
      </style>
      <label>Nombre
        <input type="text" name="nombre" placeholder="Ingresá tu nombre"/>
      </label>
`;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template;
    }
  }
  customElements.define("input-nombre-custom", InputNombreCustom);
})();
