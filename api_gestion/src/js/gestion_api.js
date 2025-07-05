// Import functions for form handling, rendering, and alerts
import { initFormHandler } from './form-handler.js';
import { renderProducts } from './ui.js';
import { showSuccessAlert, showErrorAlert, showConfirmation } from './alerts.js';

// When the DOM is fully loaded, initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Show a confirmation dialog (if configured inside the function)
  showConfirmation();

  // Show an error alert (typically used for testing or initialization)
  showErrorAlert();

  // Show a success alert (typically used for testing or initialization)
  showSuccessAlert();

  // Initialize form submission logic
  initFormHandler();

  // Render the current list of products to the UI
  renderProducts();
});
