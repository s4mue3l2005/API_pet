// Import API functions and alert handlers
import { getProducts, deleteProduct } from './api.js';
import { showConfirmation, showErrorAlert, showSuccessAlert } from './alerts.js';
import { setEditMode } from './form-handler.js';

// Get the container element where products will be displayed
const productList = document.getElementById('productList');

// Render all products to the UI
export async function renderProducts() {
  try {
    const products = await getProducts(); // Fetch products from API
    
    // If no products are found, show a message
    if (products.length === 0) {
      productList.innerHTML = '<p>No products found. Add your first product!</p>';
      return;
    }

    // Generate HTML for each product and insert into the DOM
    productList.innerHTML = products.map(product => `
      <div class="product" data-id="${product.id}">
        <p><strong>ID:</strong> ${product.id}</p>
        <p><strong>Name:</strong> ${product.name}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <div class="product-actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `).join(''); // Join all product cards into one string

    setupEventListeners(); // Attach event listeners to the new buttons
  } catch (error) {
    // If there's an error fetching products, show alert and fallback UI
    showErrorAlert('Error', 'Failed to load products.');
    productList.innerHTML = '<p>Error loading products. Please try again.</p>';
  }
}

// Attach event listeners to edit and delete buttons
function setupEventListeners() {
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', handleEdit);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', handleDelete);
  });
}

// Handle edit button click: load product info into the form
function handleEdit(event) {
  const productElement = event.target.closest('.product'); // Get the product container

  // Extract product data from the DOM
  const product = {
    id: productElement.dataset.id,
    name: productElement.querySelector('p:nth-child(2)').textContent.replace('Name: ', ''),
    price: parseFloat(productElement.querySelector('p:nth-child(3)').textContent.replace('Price: $', '')),
    category: productElement.querySelector('p:nth-child(4)').textContent.replace('Category: ', '')
  };

  setEditMode(product); // Populate form with the product for editing
}

// Handle delete button click: confirm and delete product
async function handleDelete(event) {
  const productId = event.target.closest('.product').dataset.id; // Get product ID from DOM
  
  // Ask user for confirmation before deleting
  const confirm = await showConfirmation(
    'Are you sure?', 
    'This action cannot be undone.'
  );
  
  if (confirm) {
    try {
      await deleteProduct(productId); // Delete product via API
      await renderProducts(); // Refresh the product list
      showSuccessAlert('Deleted!', 'Product has been deleted.');
    } catch {
      showErrorAlert('Error', 'Could not delete product.'); // Handle deletion failure
    }
  }
}
