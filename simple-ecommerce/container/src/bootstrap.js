import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container')

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));

import('webComponentAlias/WebComponent').then(() => {
  const component = document.createElement('my-web-component');
  component.setAttribute('title', 'this is a title set from container');
  document.body.appendChild(component);
});