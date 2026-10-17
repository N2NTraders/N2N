// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Copy wallet address to clipboard
function copyAddress(elementId, button) {
  const address = document.getElementById(elementId).innerText;

  navigator.clipboard.writeText(address).then(() => {
    const originalText = button.innerText;
    button.innerText = "Copied!";
    button.classList.add("copied");

    setTimeout(() => {
      button.innerText = originalText;
      button.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}



// Back To Top Button
const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// Image Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const thumbnails = document.querySelectorAll(".thumbnail");

// Open lightbox
thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const fullSrc = thumb.getAttribute("data-full");
    lightboxImg.src = fullSrc;
    lightbox.classList.add("active");
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});