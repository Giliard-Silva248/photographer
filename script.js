function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
  console.log('Menu toggled', navMenu.classList); 
  
}



document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2, 
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, observerOptions);
    
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  
  
  
 