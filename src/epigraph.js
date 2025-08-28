(function main() {
  class EpigraphCustom extends HTMLElement {
    constructor() {
      super();
      const template = `<style>
      :host{
        margin: 0;
        box-sizing: border-box;
        padding: 0 10%;
      }
     
      p{
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 22px;
      }
      </style>
      <div>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p></div>`;
      const shadowEl = this.attachShadow({ mode: "open" });
      shadowEl.innerHTML = template;
    }
  }
  customElements.define("epigraph-custom", EpigraphCustom);
})();
