document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
     
    // Faz a página voltar ao topo ao clicar em Tela Inicial
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');

          const targetId = this.getAttribute('href');
           if(targetId === '#inicio') {
                 window.scrollTo(0, 0);
           } else {
                document.querySelector(targetId).scrollIntoView({
                  behavior: 'smooth'
                });
           }
       });
    });


    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, 3000);
});