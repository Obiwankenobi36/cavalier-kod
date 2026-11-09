<template>
   <section id="testimonials" class="testimonials bg-f9f9f9 ">
  <div class="container" data-aos="fade-up">

    <div class="section-header" id="section-header2">
      <h2><span class="bottom-border-h">Recenzije</span> korisnika</h2>
      <p>Saznajte utiske korisnika koji su upravo poput vas. Sva su pitanja odgovorena i savjeti dani. Nakon pružene pomoći, evo što naši vjerni i zadovoljni korisnici kažu o nama!</p>
    </div>

    <div class="swiper-container" ref="mySwiper"> 
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <!-- Testimonial content goes here -->
          <!-- Example: -->
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="../../assets/images/cavalier/people/front-view-business-woman-suit.jpg" class="testimonial-img" alt="">
              <h3>Maja Majić</h3>
              <h4 class="xs-weight xl-weight">Korisnica</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
                Oduševljena sam brzinom i temeljitošću odgovora koje sam dobila na svoja pitanja o uzgoju pasa na ovoj stranici. Savjeti su mi pružili jasnoću u odgoju mog psa, a ponuđena dokumentacija bila je pravo blago znanja.
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
              </p>
            </div>
          </div>
          <!-- End testimonial item -->
        </div>
        <div class="swiper-slide">
          <!-- Testimonial content goes here -->
          <!-- Example: -->
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="../../assets/images/cavalier/people/zena1.jpg" class="testimonial-img" alt="">
              <h3>Tanja Tanić</h3>
              <h4 class="xs-weight xl-weight">Korisnica</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
                "Korištenje usluga ove stranice za uzgoj pasa bilo je nevjerojatno korisno iskustvo. Savjeti koje sam dobila bili su precizni i prilagođeni potrebama mog psa, a dokumentacija je bila iznimno informativna.
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
              </p>
            </div>
          </div>
          <!-- End testimonial item -->
        </div>
        <div class="swiper-slide">
          <!-- Testimonial content goes here -->
          <!-- Example: -->
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="../../assets/images/cavalier/people/portrait-smiley-businessman.jpg"  class="testimonial-img" alt="">
              <h3>Kruno Krunić</h3>
              <h4 class="xs-weight xl-weight">Korisnik</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
                Korisnici stranice za uzgoj pasa izražavaju iznimno pozitivan dojam nakon korištenja usluga, ističući visokokvalitetne savjete i stručnu dokumentaciju koja im je pružila vrijedne smjernice u odgoju njihovih ljubimaca.
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
              </p>
            </div>
          </div>
          <!-- End testimonial item -->
        </div>
        <div class="swiper-slide">
          <!-- Testimonial content goes here -->
          <!-- Example: -->
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="../../assets/images/cavalier/people/zena3.jpg" class="testimonial-img" alt="">
              <h3>Sanja Sanjić</h3>
              <h4 class="xs-weight xl-weight">Korisnica</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
                Ova stranica za uzgoj pasa pružila mi je dragocjene resurse i podršku tijekom mog putovanja s psom. Savjeti su bili praktični i lako primjenjivi, dok je dokumentacija obuhvatila sve aspekte skrbi o psu.
                <i class="bi bi-quote quote-icon-left" style="color: #d5d7da;"></i>
              </p>
            </div>
          </div>
          <!-- End testimonial item -->
        </div>


      </div>
      
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
      <span
        v-for="(button, index) in paginationButtons"
        :key="index"
        class="swiper-pagination-bullet"
        :class="{ 'swiper-pagination-bullet-active': button.isActive }"
        tabindex="0"
        role="button"
        :aria-label="`go to slide ${index + 1}`"
        @click="goToSlide(index)"
      ></span>
    </div>
      
    </div>

  </div>
</section>

</template>

<script>
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
export default {
  name: "Testimonials",


   data() {
      return {
        paginationButtons: [],
      };
    },
   mounted() {

    this.initSwiper();

    
  },

methods: {
    initSwiper() {
  
  this.swiper = new Swiper(this.$refs.mySwiper, {
    slidesPerView: 2,
    spaceBetween: 20,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      renderBullet: (index, className) => {
        return `<span class="${className}"></span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
    on: {
      slideChange: () => {
        const activeIndex = this.swiper.activeIndex;
        this.paginationButtons.forEach((button, index) => {
          button.isActive = index === activeIndex;
        });
        
      },
    },
  });

  const isMobile = window.innerWidth < 768;
  const buttonsCount = isMobile ? 4 : 3;
  this.paginationButtons = Array.from({ length: buttonsCount }, (_, index) => {
    return { isActive: index === 0 };
  });
 },

    goToSlide(index) {
      this.swiper.slideTo(index);
    },
  },
  beforeDestroy() {
    
    if (this.swiper) {
      this.swiper.destroy();
    }
  },

};
</script>
