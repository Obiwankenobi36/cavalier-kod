<template>
 <main id="main">

    

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row position-relative">

          <div class="col-lg-7 about-img" ></div>

          <div class="col-lg-7">
            <h2>Cavalier King Charles Španijeli</h2>
            <div class="our-story">
              <h4>Od 2023</h4>
              <h3>Naša priča</h3>
              <p>Cavalieri su smotuljci ljubavi veličine igračke. Oni su jedna od najdruželjubivijih pasmina, obasipaju privrženosću svoju obitelj i sretno se slažu s drugim psima, djecom, mačkama i potpunim strancima. Zapravo, stranci su prijatelji koje još nisu upoznali. </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> <span class="alignment-li-xs">Ljubazni prijetelji vašeg doma koji krase vašu obitelji</span></li>
                <li><i class="bi bi-check-circle"></i> <span class="alignment-li-xs">Nježni i vjerni suputnici svome vlasniku u svim trenucima</span></li>
                <li><i class="bi bi-check-circle"></i> <span class="alignment-li-xs">Umiljati, živahni i šarmantni ljubimci pogodni svima</span></li>
              </ul>
              <p>Prekrasne velike okrugle oči su zaštitni znak pasmine. Topla, tamnosmeđa boja njihovih očiju i jastučići ispod očiju stvaraju topao, bistar izgled koji pridonosi nihovom nježnom izrazu lica. Cavalier King Charles Spanieli su izvrsni terapijski psi. Izvorno uzgajani kao psi za društvo, sasvim je prirodno da se ističu kao terapijski psi. Puni su ljubavi, imaju topao temperament i velike su maze </p>

              <div class="watch-video d-flex align-items-center position-relative">
                <i class="bi bi-play-circle"></i>
                <a href="https://www.youtube.com/watch?v=KuYuo6ybPg0" class="glightbox stretched-link">Pogledaj Video</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Stats Counter Section ======= -->
    <section id="stats-counter" class="stats-counter section-bg">
    <div class="container">
      <div class="row gy-4">
        <div v-for="(counter, index) in counters" :key="index" class="col-lg-3 col-md-6">
          <div class="stats-item d-flex align-items-center w-100 h-100">
            <i :class="counter.iconClass + ' flex-shrink-0'"></i>
            <div>
              <span
                data-purecounter-start="0"
                :data-purecounter-end="counter.endValue"
                data-purecounter-duration="1"
                class="purecounter"
                ref="counters"
              ></span>
              <p>{{ counter.label }}</p>
            </div>
          </div>
        </div><!-- End Stats Item -->
        </div>

      </div>
    </section><!-- End Stats Counter Section -->

    <!-- ======= Alt Services Section ======= -->
    <section id="alt-services" class="alt-services">
      <div class="container" data-aos="fade-up">

        <div class="row justify-content-around gy-4">
          <div class="col-lg-6 img-bg"  data-aos="zoom-in" data-aos-delay="100"></div>

          <div class="col-lg-5 d-flex flex-column justify-content-center">
            <h3><span class="bottom-border-h">Cavalieri</span> - sportski psi</h3>
            <p>Da, oni su kucni psi, ali su takoder i sportski psi. Cavalier zadržavaju svoje izvorne lovačke instinkte i mogu juriti kao metak za malim životinjicama ili ako uhvate miris. Mogu bit toliko usredotočeni na lov da čak i dobro istreniran pas možda neće doći na poziv. Najbolje je ne puštati ih bez uzice dok su vani i imati ograđeno dvorište kod kuće (imajte na umu ovo čak i kada je pas odrastao, leptiri i ptice su im izazov od kojeg neće odustati kako god da ste ih istrenirali jer ovo je njihova priroda i instinkt).

            Cavalier je prirodni sportaš. Kombinacija atleticizma i sposobnosti treniranja pomaže Cavalier King Charles Spaniel da briljira u sportovima kao što su agility, rally i obedience. Posjetite ponekad agility parkove i vježbajte s njima, uživat će. </p>

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i class="bi bi-patch-check flex-shrink-0"></i>
              <div  class="padding-xs-l">
                <h4>Svestrani ljubimac</h4>
                <p>Ova se pasmina najčešće trenira za natjecanja poslušnosti i ljepote u kojima redovito osvajaju mjesta na postolju</p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-loader-alt flex-shrink-0"></i>
              <div class="padding-xs-l">
                <h4>Veliki nostalgičar</h4>
                <p>Ova je pasmina spremna čekati satima na jednom mjestu kako ne bi propustili povratak svog vlasnika</p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bxs-color flex-shrink-0"></i>
              <div  class="padding-xs-l">
                <h4>Mirne prirode</h4>
                <p>Ovi su psi idealni za druženje s djecom i mladima. Živahni i puni energije unjet će radost u vaš dom</p>
              </div>
            </div><!-- End Icon Box -->
            <br>

          </div>
        </div>

      </div>
    </section><!-- End Alt Services Section -->

    <!-- ======= Alt Services Section 2 ======= -->
    <section id="alt-services-2" class="alt-services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row justify-content-around gy-4">
          <div class="col-lg-5 d-flex flex-column justify-content-center">
            <h3><span class="bottom-border-h">Različite</span> boje Cavaliera</h3>
            <p>Uzorci i boje njihovih dlaka su razliciti:</p>

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-brightness-half flex-shrink-0"></i>
              <div  class="padding-xs-l">
                <h4>Blenheim</h4>
                <p>kestenjaste oznake na bijeloj podlozi s bijelim trakom između ušiju i oznakom u obliku romba u sredini, koje se nazivaju "Blenheimova tocka". </p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-brightness flex-shrink-0"></i>
              <div  class="padding-xs-l">
                <h4>Tricolor</h4>
                <p>crne oznake na bijeloj podlozi; sa žutosmedim/ narančastim oznakama preko očiju i na obrazima, kao i unutar ušiju i na donjoj strani repa. </p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i class="bx bxs-brightness flex-shrink-0"></i>
              <div  class="padding-xs-l">
                <h4>Ruby</h4>
                <p>bogata crveno -smeđa posvuda.</p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i class="bx bxs-brightness-half flex-shrink-0"></i>
              <div  class="padding-xs-l">
                <h4>Black and tan crni</h4>
                <p>sa žutosmeđim/narančastim oznakama poput trikolora na njuskici i iznad očiju, te na prsima i nogama (Rubi i Black tan se nazivaju jos i "Wholecolor cavalier")</p>
              </div>
            </div><!-- End Icon Box -->
          </div>

          <div class="col-lg-6 img-bg2"  data-aos="zoom-in" data-aos-delay="100"></div>
        </div>

      </div>
    </section><!-- End Alt Services Section 2 -->

    








  </main>

  <br>
  <br>
  <br>
  <FeaturedDogs />
  <br>
  <br>
  <br>
  <AboutBanner />

 

</template>

<script >
import FeaturedDogs from "../Common/FeaturedDogs";
import AboutBanner from "../Common/AboutBanner";
import Purecounter from '@srexi/purecounterjs';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';


export default {
  name: "PortfolioDetails",
  components: {
    FeaturedDogs,
    AboutBanner,
  },
  data() {
    return {
      counters: [
        { iconClass: 'bi bi-emoji-smile color-blue', endValue: '232', label: 'Zadovoljna klijenta' },
        { iconClass: 'bi bi-journal-richtext color-orange', endValue: '100', label: 'Dokumenata o uzgoju' },
        { iconClass: 'bi bi-headset color-green', endValue: '1463', label: 'Sati usluge korisnicima' },
        { iconClass: 'bi bi-people color-pink', endValue: '9', label: 'Vrhunskih radnika' },
      ],
     
    };
  },
  mounted() {
    this.counters.forEach((counter, index) => {
      const pureCounterElement = this.$refs.counters[index];
      new Purecounter(pureCounterElement);
    });

    
  },
  
  
};



</script>
