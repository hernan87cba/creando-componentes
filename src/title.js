(function main() {
  class TitleCustom extends HTMLElement {
    constructor() {
      super();
      const template = `
      <style>
      :host {
            width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      gap: 23px;
      }
      h1 {
        margin: 0;        
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 52px;
      }
      p {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px;
      }
      </style>
      
      <h1>Título de la página</h1>
      <p>Esta página sin dudas es la mejor</p>
      `;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template;
    }
  }
  customElements.define("title-custom", TitleCustom);
})();
