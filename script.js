// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage || 
            (currentPage === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Optional: Add subtle animation to the content box when page loads
    const contentBox = document.querySelector('.content-box');
    if (contentBox) {
        contentBox.style.opacity = '0';
        contentBox.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            contentBox.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            contentBox.style.opacity = '1';
            contentBox.style.transform = 'translateY(0)';
        }, 100);
    }
});
