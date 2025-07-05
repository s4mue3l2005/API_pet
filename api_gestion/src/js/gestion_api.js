import { initFormHandler } from './form-handler.js';
import { renderProducts } from './ui.js';
import { showSuccessAlert,showErrorAlert,showConfirmation } from './alerts.js';

document.addEventListener('DOMContentLoaded', () => {
  showConfirmation();
  showErrorAlert();
  showSuccessAlert();
  initFormHandler();
  renderProducts();
});