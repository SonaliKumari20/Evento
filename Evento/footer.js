window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const footerContent = document.createElement('object');
    footerContent.type = 'text/html';
    footerContent.data = 'footer.html';
    footerContent.style.width = '100%';
    footerContent.style.display = 'block';
    footerContent.style.height = '100%';
  
    if (currentPage === '/index.html') {
      footerContent.onload = function() {
        const footerLink = footerContent.contentDocument.querySelector('.main-page-link');
        footerLink.style.display = 'none';
      };
    }
  
    footerPlaceholder.appendChild(footerContent);
  });
  