<template>
  <div>
    <Navbar />
    
    <PortfolioDetailsDog />
    <Footer />
  </div>
</template>

<script>

import Navbar from "../Layouts/Navbar";
import PortfolioDetailsDog from "../PortfolioDetailsDog/PortfolioDetailsDog";
import Footer from "../Layouts/Footer";


export default {
  name: "PortfolioDetailsPage",
  components: {
    Navbar,
    PortfolioDetailsDog,
    Footer,
  },

 

};

</script>
