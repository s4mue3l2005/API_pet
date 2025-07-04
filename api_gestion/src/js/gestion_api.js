import { initFormHandler } from './form-handler.js';
import { renderProducts } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initFormHandler();
  renderProducts();
});