const menuHamburguer = document.querySelector('.menu-hamburguer');

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

function createSwiper(container, pagination, nextButton, prevButton) {
        return new Swiper(container, {
     slidesPerView: handleWidth(),
    spaceBetween: 30,
     pagination: {
          el: "swiper-pagination",
            clickable: true,
       },
        navigation: {
        nextEl: nexButton,
         prevEl: prevbButton,
        },
      });
    }

    function handleWidth() {
        let getWidth = window.innerWidth || document.documentElement.clientWidth;
        let slideShow = 3;
      
        if (getWidth < 1001) {
          slideShow = 2;
        }
      
        if (getWidth < 700) {
          slideShow = 1;
        }
      
        return slideShow
      }
      
      menuHamburguer.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
      
      links.forEach(item => {
        item.addEventListener('click', () => {
          nav.classList.toggle('active');
        })
      })
      
      window.addEventListener('resize', () => {
        swiper.params.slidesPerView = handleWidth();
        swiper.update();
      })
      
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 200) {
          header.style.background = '#191919'
        } else {
          header.style.background = 'transparent'
        }
      
      })
    

    const imageSlider = document.getElementById("imge-slider");
    
    function createImageElement(image) {
        var imageSlide = document.createElement("div");
        imageSlide.className = "swiper-slide card-image";
    
        var imagElement = document.createElement("div");
        imageElement.className = "image";
    
        var imageTag = document.createElement("image");
        imageTag.src = image.src;
        imageTag.controls = true;
    
        var iamgeDescription = document.createElement("p");
        imageDescription.textContent = image.description;
    }
    
        // Um vídeo está sendo reproduzido, pausa a rolagem automática!
        imageTag.addEventListener("play", function() {
            videoPlaying = true;
            mySwiper.autoplay.stop();
        });
    


        