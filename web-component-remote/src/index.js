class MyWebComponent extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: yellow;
          color: purple;
        }
      </style>
      <div id="hello">Hello World</div>
    `;
  }

  attributeChangedCallback (attribute, _, newValue) {
    if (attribute === 'title') {
      this.shadowRoot.querySelector('#hello').innerHTML = newValue;
    }
  }
}

window.customElements.define('my-web-component', MyWebComponent);