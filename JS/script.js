// Generate a random captcha code
function generateCaptcha() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var length = 5;
    var captcha = '';
    
    for (var i = 0; i < length; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return captcha;
  }
  
  // Render the captcha in the captcha container
  function renderCaptcha() {
    var captchaContainer = document.getElementById('captcha-container');
    var captcha = generateCaptcha();
    
    captchaContainer.innerHTML = '';
    
    var captchaText = document.createElement('span');
    captchaText.textContent = captcha;
    
    var captchaInput = document.createElement('input');
    captchaInput.type = 'text';
    captchaInput.id = 'captcha-input';
    
    captchaContainer.appendChild(captchaText);
    captchaContainer.appendChild(captchaInput);
  }
  
  // Handle form submission
  function submitForm(event) {
    event.preventDefault();
    
    var captchaInput = document.getElementById('captcha-input');
    var captcha = document.getElementById('captcha-container').firstChild.textContent;
    
    if (captchaInput.value === captcha) {
      // Perform form submission
      var formData = new FormData(document.getElementById('contact-form'));
      // Add your code here to send the form data to the server
      console.log('Form submitted successfully');
    } else {
      alert('Invalid CAPTCHA. Please try again.');
    }
    
    captchaInput.value = '';
    renderCaptcha();
  }
  
  // Attach event listeners
  document.addEventListener('DOMContentLoaded', function() {
    renderCaptcha();
    document.getElementById('contact-form').addEventListener('submit', submitForm);
  });
  