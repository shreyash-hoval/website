// Smooth scrolling for navigation links
// Selects all anchor (<a>) elements that have href attributes starting with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the default jump-to behavior
        
        // Scrolls smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Enables smooth scrolling animation
        });
    });
});

// Scroll animations
// Creates an Intersection Observer to detect when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Checks if the element is in the viewport
            entry.target.classList.add('active'); // Adds 'active' class to trigger animations
        }
    });
});

// Selects all elements with the class 'animate' and observes them
document.querySelectorAll('.animate').forEach((el) => {
    observer.observe(el);
});
