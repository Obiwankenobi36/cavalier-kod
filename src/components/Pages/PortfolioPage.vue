<template>
  <div>
    <Navbar />
    <PageTitle
      subTitle="Psi"
      heding="Treniranje pasa i uzgajanje profesionalaca" class="about-page-banner"
    />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Layouts/Footer";

export default {
  name: "PortfolioPage",
  components: {
    Navbar,
    PageTitle,
    Portfolio,
    Footer,
  },

  
};
</script>
