// Header
window.addEventListener("load", function () {
  document.getElementById(
    "header"
  ).innerHTML = `<a href="/workout.html">Get Fit</a>
       
          <a href="/index.html">
            <img
              class="logoimage"
              src="images/icon512.png"
              width="50"
              height="50"
              alt="What's My BMI Logo"
            />
            <span class="logotext">What's Your BMI</span>
          </a>
      
        <a href="/food.html">Eat Better</a>`;
});

// Footer

window.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("footer").innerHTML = `
        <div class="footer-nav">
          <a href="/index.html">Home</a>
          <a href="/index.html">BMI Calculator</a>
          <a href="/workout.html">Get Fit</a>
          <a href="/food.html">Eat Better</a>
          <a href="/privacy.html" target="_blank">Privacy Policy</a>
          <p class="copyright">
            &copy; <span id="currentYear">${currentYear}</span>
            <a href="/index.html">www.whats-my-bmi.com</a>
          </p>
        </div>`;
});
