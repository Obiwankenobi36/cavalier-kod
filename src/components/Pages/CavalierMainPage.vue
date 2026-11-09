<template>
  <div>
    <Navbar />
    <MainBanner />
    <HelpDesk />
    <Services />
    <AboutBanner />
    <Faq />
    <Diagram />
    <Testimonials/>
    <br>
    <br>
    <FeaturedDogs />
    <br class="hide-ml">
    
    <Partner />
    <Footer />
  </div>
</template>

<script>
import Typed from 'typed.js';
import Navbar from "../Layouts/Navbar";
import MainBanner from "../CavalierMain/MainBanner";
import HelpDesk from "../CavalierMain/HelpDesk";
import Faq from "../CavalierMain/Faq";
import OurTeam from "../CavalierMain/OurTeam";
import Partner from "../CavalierMain/Partner";
import Testimonials from "../CavalierMain/Testimonials";
import Footer from "../Layouts/Footer";
import FeaturedDogs from "../Common/FeaturedDogs";
import Services from "../CavalierMain/Services";
import AboutBanner from "../Common/AboutBanner";
import Diagram from "../Common/Diagram";
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';



export default {
  name: "CavalierMainPage",
  components: {
    Navbar,
    MainBanner,
    HelpDesk,
    Partner,
    Footer,
    Services,
    OurTeam,
    Testimonials,
    Faq,
    Diagram,
    AboutBanner,
    FeaturedDogs,
  },
  data() {
      return {
  
      };
    },
   mounted() {


    let typedElement = document.querySelector("#typed");

    if (typedElement) {
      let typed_strings = typedElement.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');


      new Typed('#typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
      
    }
  },

};
</script>
