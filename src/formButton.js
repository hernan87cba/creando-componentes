(function main() {
  class FormButtonCustom extends HTMLElement {
    constructor() {
      super();
      const template = `
      <style>
      button {
        width: 100%;
        height: 55px;
        background-color: #9cbbe9;
        border: none;
        border-radius: 4px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 22px;
      }
      button:hover{
        background-color: white;
        border: solid 2px #9cbbe9;
        cursor: pointer;
       } 
        
      </style>
      <button>Enviar</button>`;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template;
    }
  }
  customElements.define("form-button-custom", FormButtonCustom);
})();
