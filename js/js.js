$(document).ready(function(){
  

  var  toggleBtn = $('.navbar-toggle');
  var modalSec = $('.navbar-mobile');
  var menuList = $('.navbar-links');

  toggleBtn.on('click', function(){
    modalSec.addClass('active-nav-mobile');
    menuList.addClass('active-link');
  });

  modalSec.on('click', function(){
    modalSec.removeClass('active-nav-mobile');
    menuList.removeClass('active-link');
  });


});




const sliderWrapper = document.querySelector('.slider-wrapper');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentIndex = 0;

  function showCard(index) {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const newPosition = -index * cardWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;

    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function createDots() {
    const totalCards = sliderWrapper.children.length;

    for (let i = 0; i < totalCards; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showCard(i));
      dotsContainer.appendChild(dot);
    }

    // Set the first dot as active initially
    dotsContainer.children[0].classList.add('active');
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % sliderWrapper.children.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + sliderWrapper.children.length) % sliderWrapper.children.length;
    showCard(currentIndex);
  }

  createDots(); // Create dots dynamically
  setInterval(nextCard, 3000); // Auto slide every 3 seconds (adjust as needed)


  function toggleSection(sectionNumber) {
    const section = document.getElementById(`section${sectionNumber}`);
    const header = document.querySelector(`.header:nth-child(${sectionNumber * 2 - 1})`);
    const icon = header.querySelector('.icon');

    if (section.classList.contains('active')) {
      section.classList.remove('active');
      header.classList.remove('active');
      icon.textContent = '+';
    } else {
      section.classList.add('active');
      header.classList.add('active');
      icon.textContent = '-';
    }
  }
