// Slideshow images
const slideshowImages = document.querySelectorAll('.slideshow-image');
let currentImageIndex = 0;

/// Function to open login popup
function openLoginPopup() {
    const popup = document.getElementById('loginPopup');
    popup.style.display = 'block';
  }
  
  // Function to close login popup
  function closeLoginPopup() {
    const popup = document.getElementById('loginPopup');
    popup.style.display = 'none';
  }
  
  // Trigger openLoginPopup() when the Login button is clicked
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', openLoginPopup);
  
  // Close the popup when the user clicks outside the content area
  window.addEventListener('click', function(event) {
    const popup = document.getElementById('loginPopup');
    if (event.target === popup) {
      closeLoginPopup();
    }
  });
  

// Function to change slideshow image
