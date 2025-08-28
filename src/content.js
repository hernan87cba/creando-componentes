(function main() {
  class ContentCustom extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      const subtitle = this.getAttribute("subtitle"); // Leer el atributo
      const template = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            gap: 33px;
          }  
          h2 {
            margin: 0;
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 38px;
          }
          p {
            margin: 0;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 18px;
          }
        </style>
        <h2>${subtitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequuntur iure voluptas quia accusantium voluptatum aspernatur
          provident et repudiandae quam veritatis, libero porro sit beatae
          laboriosam a aut consequatur quidem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequuntur iure voluptas quia accusantium voluptatum aspernatur
          provident et repudiandae quam veritatis, libero porro sit beatae
          laboriosam a aut consequatur quidem?
        </p>
      `;
      this.shadowRoot.innerHTML = template; // Asignar el template al shadow DOM
    }
  }
  customElements.define("content-custom", ContentCustom);
})();
