/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeaders = document.querySelectorAll('.skills__header');

skillsHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const parent = header.parentNode;
    const content = header.nextElementSibling;

    if (parent.classList.contains('skills__open')) {
      // Close
      content.style.height = content.scrollHeight + 'px'; // set height first
      requestAnimationFrame(() => {
        content.style.height = '0px';
        content.style.opacity = '0';
      });
      parent.classList.remove('skills__open');
      parent.classList.add('skills__close');
    } else {
      // Close all others
      skillsContent.forEach((item) => {
        item.classList.remove('skills__open');
        item.classList.add('skills__close');
        const list = item.querySelector('.skills__list');
        list.style.height = '0px';
        list.style.opacity = '0';
      });

      // Open current
      parent.classList.remove('skills__close');
      parent.classList.add('skills__open');
      content.style.height = content.scrollHeight + 'px';
      content.style.opacity = '1';
    }
  });
});


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // Hide all tab contents
        tabContents.forEach(tabContent => tabContent.classList.remove('qualification__active'));

        // Show the selected tab content
        if (target) target.classList.add('qualification__active');

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('qualification__active'));

        // Add active class to clicked tab
        tab.classList.add('qualification__active');
    });
});


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
// let swiperPortfolio = new Swiper(".portfolio__container", {
//     cssMode: true,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


document.getElementById("submitButton").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector("form").submit(); // Submits the form
});

const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert form data to a JSON object
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("https://formspree.io/f/xrbeyopg", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  
            "Accept": "application/json",
        },
        body: JSON.stringify(formObject), 
    });

    if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset(); 
    } else {
        alert("Failed to send message. Please check your input.");
    }
        } catch (error) {
    console.error("Error sending message:", error);
    alert("An error occurred. Please try again.");
    }
};

document.querySelector(".contact__form").addEventListener("submit", handleSubmit);

//ABOUT SECTION
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".about__img");
  const dataItems = document.querySelectorAll(".about__data > *");

  let hasAnimated = false;

  function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < triggerBottom && !hasAnimated) {
      img.classList.add("animate-in");

      dataItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, index * 200); // Stagger delay
      });

      hasAnimated = true; // Prevent further triggering
    }
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger once on page load
});


//   QUALIFICATION ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const qualificationItems = document.querySelectorAll(".qualification__data");
  let hasAnimated = false;

  function animateQualificationOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    // Use the first item as the trigger
    const firstItem = qualificationItems[0];
    const firstLeft = firstItem.querySelector(".qualification__left");
    const firstRight = firstItem.querySelector(".qualification__right");

    const firstTop = Math.min(
      firstLeft?.getBoundingClientRect().top || Infinity,
      firstRight?.getBoundingClientRect().top || Infinity
    );

    if (firstTop < triggerBottom && !hasAnimated) {
      qualificationItems.forEach((item, index) => {
        const left = item.querySelector(".qualification__left");
        const right = item.querySelector(".qualification__right");

        setTimeout(() => {
          if (left) left.classList.add("animate");
          if (right) right.classList.add("animate");
        }, index * 200); // Stagger delay if desired
      });

      hasAnimated = true; // Only run once
    }
  }

  window.addEventListener("scroll", animateQualificationOnScroll);
  animateQualificationOnScroll(); // Run once on load
});

  //PROJECTS SWIPER
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      allowTouchMove: false, // 👈 disables dragging/swiping
      // spaceBetween: -30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
on: {
  autoplayTimeLeft(swiperInstance, time, progress) {
    // Only get the actual active slide (not a duplicate)
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];

    // Prevent updates on duplicate slides
    if (activeSlide.classList.contains("swiper-slide-duplicate")) return;

    // Reset progress bars on all non-active slides
    swiperInstance.slides.forEach((slide) => {
      if (slide !== activeSlide) {
        const bar = slide.querySelector(".progress-bar");
        if (bar) bar.style.width = "0%";
      }
    });

    // Animate only the active, real slide
    const progressBar = activeSlide.querySelector(".progress-bar");
    if (progressBar) {
      progressBar.style.width = `${(1 - progress) * 100}%`;
    }
  },
},
    });
  
    document.querySelectorAll('.next-arrow').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        swiper.slideNext();
      });
    });
    
  });


  //CONTACT SECTION ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const triggerSection = document.querySelector(".contact__info__container");
  const allContactElements = document.querySelectorAll(
    ".contact__information, .contact__content, .contact__form__content"
  );

  let hasAnimated = false;

  function animateContactSection() {
    const triggerPoint = window.innerHeight * 0.85;
    const sectionTop = triggerSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint && !hasAnimated) {
      allContactElements.forEach((el) => el.classList.add("animate"));
      hasAnimated = true; // Prevent re-triggering
    }
  }

  window.addEventListener("scroll", animateContactSection);
  animateContactSection(); // Run once in case it's already visible
});

//NAV LOGO

  document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("#animatedLogo");
    const chars = Array.from(logo.querySelectorAll(".char"));
    const slash = logo.querySelector(".slash");

    let position = 1; // Start after '<'
    let direction = 1; // 1 = forward, -1 = backward

    function animateSlash() {
      // Clear previous active class
      chars.forEach(char => char.classList.remove("active"));

      // Set the current character as active for trail effect
      if (chars[position]) {
        chars[position].classList.add("active");
      }

      // Move slash to current position
      logo.insertBefore(slash, chars[position + 1]);

      // Update position
      if (position === chars.length - 2 || position === 0) {
        direction *= -1; // Reverse
      }
      position += direction;

      setTimeout(animateSlash, 200); // Speed of animation
    }

    animateSlash();
  });

