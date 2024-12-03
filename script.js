const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach(link => 
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

document.getElementById('hamburger-icon').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const contactBtnGroup = document.querySelector('.icon-btn-group');
    
    contactBtnGroup.addEventListener('click', function(e) {
        // Only trigger if clicking the container itself, not its children
        if (e.target === this) {
            location.href = './#contact';
        }
    });
});