// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animate on Scroll (AOS) library initialization
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  
  // Initialize AOS after the page loads
  window.addEventListener('load', () => {
    aos_init();
  });
  
  // Subscribe form handling
  const form = document.getElementById('subscribe-form');
  form.addEventListener('submit', handleFormSubmit);
  
  const button = document.getElementById('subscribe-btn');
  button.addEventListener('click', handleButtonClick);
  
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const email = formData.get('email');
  
    // TODO: Send the email to a server using an HTTP request or an email service
    console.log(`Subscribed with email: ${email}`);
  }
  
  function handleButtonClick() {
    const form = document.getElementById('subscribe-form');
    form.dispatchEvent(new Event('submit'));
  }
  
  