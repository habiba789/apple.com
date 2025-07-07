// Js to add grey bg in nav after clicking any navitem
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".navlink");
const bottomBanner = document.querySelector(".bottom-banner")


navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        header.classList.add("active-bg");
        bottomBanner.classList.add("active-bg");

    });
    link.addEventListener("mouseleave", () => {
        header.classList.remove("active-bg");
        bottomBanner.classList.remove("active-bg");
    });
});

// js to have a constant blinking cursor

document.querySelector('.search-navlink').addEventListener('mouseenter', () => {
    document.getElementById('searchField').focus();
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

function toggleMobileMenu() {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
}

// Toggle on hamburger click
hamburger.addEventListener("click", toggleMobileMenu);

// Carousel section 1 js

const images = [
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/1e/01/8a/1e018acf-c8ff-1fbe-844d-c7e573dd383a/57c591a9-2c28-4f62-b6ee-c69a3ff56a3d.png/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f3/6c/48/f36c4848-6d13-2b3f-f686-6a008ff18d15/b3d3a073-61d7-4211-8248-9b56ba3039f5.png/548x1186.jpg",
        heading: null,
        text: "Watch every club, every match, live—all season long.",
        button: "See the schedule",
        dot: null
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/Axf6fFibiK2puSTzKXvgpA/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/27/d0/28/27d0280b-b9bd-93a8-66e7-f3c696c16b26/170cca06-c5c2-4992-84d2-723b10d56735.png/548x1186.jpg",
        heading: "Comedy",
        text: "A heartfelt comedy about life and other hazards.",
        button: "Stream now",
        dot: "·"
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/99GnD9S-N_8FZ-3UPCiiNQ/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/85/ce/74/85ce742b-6360-c69b-d743-8cc0a3a4991b/9ac5a1ca-acdb-47cc-a3f6-31c0860a6a9c.png/548x1186.jpg",
        heading: "Thriller",
        text: "A search for serial arsonists ignites a twisted game of secrets and suspicions.",
        button: "Stream now",
        dot: "·"
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/Wk5tKXFA4Zr4in8sDkQeYA/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/9c/a7/83/9ca783f4-d417-03f5-b00e-fa6cc31a401f/c09e2ecf-84b2-4d4a-b7a4-a349a9023177.png/548x1186.jpg",
        heading: "Sci-Fi",
        text: "Built to destroy. Forced to connect.",
        button: "Stream now",
        dot: "·"
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/hjmYsl20uNCFQ9sqjiQIYw/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/1c/b7/11/1cb711aa-1fbd-2540-e45d-b6d68075c0ea/97c0c19f-7a3c-4a76-ae3f-7e1a29654d7d.png/548x1186.jpg",
        heading: "Drama",
        text: "Live your best lie.",
        button: "Stream now",
        dot: "·"
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/548x1186.jpg",
        heading: "Comedy",
        text: "Kindness makes a comeback.",
        button: "Stream now",
        dot: "·"
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/26/61/53/266153aa-dff9-740b-1972-4987f9e942ef/69fb18b2-c5b2-4396-8719-55e815525290.png/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/c9/52/6f/c9526f17-aec0-c5d5-2927-03e78ea6c62a/5b92d1c8-0223-4675-bfb5-596dd0596d29.png/548x1186.jpg",
        heading: null,
        text: "Live MLB games, every Friday.",
        button: "See the schedule",
        dot: null
    },
    {
        desktop: "https://is1-ssl.mzstatic.com/image/thumb/4UEcdeb6Xoc40fhFSAr3Og/1378x774.jpg",
        mobile: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/a1/5e/a5/a15ea5b4-ca40-e15e-e49c-1f50d9c54c58/d48a9a67-4f77-45e5-81e5-8e491d74c79a.png/548x1186.jpg",
        heading: "Action ",
        text: "It’s only a legend until you discover it.",
        button: "Stream now",
        dot: "·"
    }
];



const slidesContainer = document.getElementById("slides");
const indicatorsContainer = document.getElementById("indicators");

let currentSlide = 1;
let slideInterval;

function createSlide(data, idx) {
    const slide = document.createElement("div");
    slide.className = "slide";

    const isMobile = window.innerWidth <= 735;
    const img = isMobile ? data.mobile : data.desktop;

    const { heading, text, button, dot } = data;

    slide.innerHTML = `
    <div class="slide-image" style="background-image: url('${img}'); background-size: cover;">
      <div class="slide-content">
        <div class="slide-content-text"> 
          <p>
            ${heading ? `<span class="slide-content-heading" style="font-weight:bold;">${heading}</span>` : ''}
            ${dot ? `<span class="slider-dot" style="font-weight:bolder;">${dot}</span>` : ''} ${text}
          </p>
        </div>
        <button class="slide-btn">${button}</button>
      </div>
    </div>
  `;
    return slide;
}

function initializeSlides() {
    const clonedSlides = [];

    // Clone last and first
    clonedSlides.push(createSlide(images[images.length - 1], images.length - 1));
    clonedSlides.push(createSlide(images[0], 0));

    slidesContainer.appendChild(clonedSlides[0]);

    images.forEach((item, idx) => {
        const slide = createSlide(item, idx);
        slidesContainer.appendChild(slide);

        const dot = document.createElement("div");
        dot.className = "indicator" + (idx === 0 ? " active" : "");
        dot.onclick = () => goToSlide(idx + 1);
        indicatorsContainer.appendChild(dot);
    });

    slidesContainer.appendChild(clonedSlides[1]);
}


let lastIsMobile = window.innerWidth <= 735;

function updateSlides(animate = true) {
    const isMobile = window.innerWidth <= 735;

    if (isMobile !== lastIsMobile) {
        document.querySelectorAll(".slide").forEach((slideEl, idx) => {

            const data = images[(idx - 1 + images.length) % images.length];
            const img = isMobile ? data.mobile : data.desktop;

            const imageDiv = slideEl.querySelector(".slide-image");
            if (imageDiv) {
                imageDiv.style.backgroundImage = `url('${img}')`;
            }
        });
        lastIsMobile = isMobile;
    }

    const slide = slidesContainer.querySelector(".slide");
    const slideWidth = slide.getBoundingClientRect().width;
    const gap = parseInt(getComputedStyle(slidesContainer).gap || "20");
    const carouselWidth = document.querySelector(".carousel").getBoundingClientRect().width;
    const centerOffset = (slideWidth + gap) * currentSlide - (carouselWidth - slideWidth) / 2;

    slidesContainer.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
    slidesContainer.style.transform = `translateX(-${centerOffset}px)`;

    document.querySelectorAll(".indicator").forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentSlide - 1);
    });

    document.querySelectorAll(".slide").forEach((s, idx) => {
        s.classList.toggle("shadow", idx !== currentSlide);
    });
}

function nextSlide() {
    currentSlide++;
    updateSlides(true);

    if (currentSlide === images.length + 1) {
        setTimeout(() => {
            currentSlide = 1;
            updateSlides(false);
        }, 500);
    }
}

function prevSlide() {
    currentSlide--;
    updateSlides(true);

    if (currentSlide === 0) {
        setTimeout(() => {
            currentSlide = images.length;
            updateSlides(false);
        }, 500);
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides(true);
}

function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 7000);
}


initializeSlides();
updateSlides(false);
startAutoSlide();


// second carousel js
const track = document.getElementById("tickerTrack");

// track.addEventListener("mouseenter", () => {
//     track.classList.add("slow");
//     track.classList.remove("ticker-track-normal-speed");
// });

// track.addEventListener("mouseleave", () => {
//     track.classList.remove("slow");
//     track.classList.add("ticker-track-normal-speed");
// });



// foooter accordian js
document.querySelectorAll('.footer-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const section = toggle.closest('.footer-section');
        section.classList.toggle('active');
    });
});

