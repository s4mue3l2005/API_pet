// Import SweetAlert2 library for styled alerts
import Swal from 'sweetalert2';

// Display a success alert with customizable title and message
export function showSuccessAlert(title, text) {
  return Swal.fire({
    title,              // Title of the alert
    text,               // Message body
    icon: 'success',    // Success icon
    confirmButtonText: 'OK', // Confirmation button text
    background: '#fff', // Background color
    color: '#333'       // Text color
  });
}

// Display an error alert with customizable title and message
export function showErrorAlert (title, text) {
  return Swal.fire({
    title,              // Title of the alert
    text,               // Message body
    icon: 'error',      // Error icon
    confirmButtonText: 'OK',
    background: '#fff',
    color: '#333'
  });
}

// Display a confirmation dialog and return whether user confirmed
export async function showConfirmation(title, text) {
  const result = await Swal.fire({
    title,              // Title of the confirmation box
    text,               // Message body
    icon: 'warning',    // Warning icon
    showCancelButton: true, // Show cancel button
    confirmButtonText: 'Yes, delete it!', // Text for confirm button
    cancelButtonText: 'Cancel',           // Text for cancel button
    background: '#fff',
    color: '#333',
    confirmButtonColor: '#e74c3c', // Red confirm button
    cancelButtonColor: '#3498db'   // Blue cancel button
  });
  return result.isConfirmed; // Return true if user confirmed
}
