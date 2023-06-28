// Header
window.addEventListener("load", function () {
  document.getElementById("header").innerHTML = `
          <a href="/index.html">
            <img
              class="logoimage"
              src="images/android-chrome-512x512.png"
              width="50"
              height="50"
              alt="Dad Jokes Foam Finger"
            />
            <span class="logotext">Get Dad Jokes</span>
          </a>
      
        <a href="/blog.html">Blog</a>`;
});

// Footer

window.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("footer").innerHTML = `
        <div class="footer-nav">
          <a href="/index.html">Home</a>
          <a href="/index.html">Dad Jokes</a>
          <a href="/blog.html">Blog</a>
          <a href="/privacy.html" target="_blank">Privacy Policy</a>
          <p class="copyright">
            &copy; <span id="currentYear">${currentYear}</span>
            <a href="/index.html">www.get-dad-jokes.com</a>
          </p>
        </div>`;
});
