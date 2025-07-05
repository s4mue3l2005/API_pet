// Import necessary functions from other modules
import { createProduct, updateProduct, checkDuplicateName } from './api.js';
import { showSuccessAlert, showErrorAlert } from './alerts.js';
import { renderProducts } from './ui.js';

// Get form and input elements from the DOM
const form = document.getElementById('productForm');
const nameInput = document.getElementById('productName');
const priceInput = document.getElementById('productPrice');
const categoryInput = document.getElementById('productCategory');

// Track if the form is in edit mode
let editMode = false;
// Store the ID of the product being edited
let currentProductId = null;

// Initialize form submission handling
export function initFormHandler() {
  form.addEventListener('submit', handleSubmit);
}

// Set form to edit mode with product data
export function setEditMode(product) {
  editMode = true;
  currentProductId = product.id;
  nameInput.value = product.name;
  priceInput.value = product.price;
  categoryInput.value = product.category;
  form.querySelector('button[type="submit"]').textContent = 'Update';
}

// Handle form submission for both create and update operations
async function handleSubmit(e) {
  e.preventDefault(); // Prevent page reload

  // Create product object from form inputs
  const product = {
    name: nameInput.value.trim(),
    price: parseFloat(priceInput.value.trim()),
    category: categoryInput.value.trim()
  };

  // Validate product fields before proceeding
  if (!validateProduct(product)) return;

  try {
    // Check if the product name already exists (excluding current one if editing)
    if (await checkDuplicateName(product.name, editMode ? currentProductId : null)) {
      showErrorAlert('Duplicate', 'Product name already exists.');
      return;
    }

    // Perform update or creation based on mode
    if (editMode) {
      await updateProduct(currentProductId, product);
      showSuccessAlert('Updated!', 'Product updated successfully.');
    } else {
      await createProduct(product);
      showSuccessAlert('Saved!', 'Product added successfully.');
    }

    // Reset form and refresh product list
    resetForm();
    await renderProducts();
  } catch (error) {
    // Handle errors and show alert
    showErrorAlert('Error', 'Operation failed.');
  }
}

// Validate the product input fields
function validateProduct(product) {
  if (!product.name || isNaN(product.price)) {
    showErrorAlert('Oops...', 'All fields are required.');
    return false;
  }

  if (product.price < 0) {
    showErrorAlert('Oops...', 'Price cannot be negative.');
    return false;
  }

  return true;
}

// Reset the form to its default state
function resetForm() {
  form.reset();
  editMode = false;
  currentProductId = null;
  form.querySelector('button[type="submit"]').textContent = 'Add';
}
