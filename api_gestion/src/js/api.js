// Define the base URL for the API endpoint
const endpoint = 'http://localhost:3000/productos';

// Fetch all products from the server
export async function getProducts() {
  try {
    const response = await fetch(endpoint); // Send GET request to the endpoint
    if (!response.ok) throw new Error('Failed to load products'); // Check for server error
    return await response.json(); // Parse and return JSON data
  } catch (error) {
    throw error; // Re-throw error for handling elsewhere
  }
}

// Send a new product to be created on the server
export async function createProduct(product) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST', // Use POST method to create new resource
      headers: { 'Content-Type': 'application/json' }, // Set JSON headers
      body: JSON.stringify(product) // Convert product object to JSON string
    });
    if (!response.ok) throw new Error('Failed to create product'); // Handle errors
    return await response.json(); // Return the created product
  } catch (error) {
    throw error;
  }
}

// Update an existing product by ID
export async function updateProduct(id, product) {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'PUT', // Use PUT to update the resource
      headers: { 'Content-Type': 'application/json' }, // JSON headers
      body: JSON.stringify(product) // Stringify the product object
    });
    if (!response.ok) throw new Error('Failed to update product'); // Handle failure
    return await response.json(); // Return updated product
  } catch (error) {
    throw error;
  }
}

// Delete a product by its ID
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'DELETE' // Use DELETE method
    });
    if (!response.ok) throw new Error('Failed to delete product'); // Check response
    return true; // Return true on successful deletion
  } catch (error) {
    throw error;
  }
}

// Check if a product with the same name already exists (case-insensitive)
// Optionally exclude a specific ID (useful when editing)
export async function checkDuplicateName(name, excludeId = null) {
  const products = await getProducts(); // Fetch current products
  return products.some(
    product => product.name.toLowerCase() === name.toLowerCase() && 
              (!excludeId || product.id !== excludeId) // Ignore current product if editing
  );
}
