/*=================== toggle icon navbar  ========================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*=================== scroll section active link  ========================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*=================== sticky navbar ========================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*=================== remove toggle icon and navbar  ========================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*=================== scroll reveal ========================*/

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

/*=================== typed js ========================*/
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "UI/UX Desaigner"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*=================== Download CV ========================*/

// Mengambil referensi ke tombol 'Download CV'
let downloadCvBtn = document.getElementById("download-cv-btn");

//Menambahkan event listener untuk menangani tombol download
downloadCvBtn.addEventListener("click", function (event) {
  //mengarahkan pengguna ke tautan untuk mengunduh CV
  window.location.href = "cv/cv.pdf"; //menggunakan path relatif
});

// Function to show success message after form submission
function showSuccessMessage() {
  // Show an alert
  alert("Pesan telah terkirim!");

  // Set window hash to empty to bring the user back to the top of the page after page refresh
  window.location.hash = "";

  // Refresh the page after clicking OK on the alert
  window.location.reload();

  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

// Event listener for form submission
document.querySelector("form").addEventListener("submit", function (event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Call the function to show success message
  showSuccessMessage();

  // Optionally, you can submit the form programmatically
  // this.submit();
});
