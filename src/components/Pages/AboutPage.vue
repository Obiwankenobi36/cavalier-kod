<template>
  <div>
    <Navbar />
    <PageTitle
      subTitle="O Cavalierima"
      heding="Pozdrav svijete! Mi smo Cavalieri!"
      class="about-page-banner"
    />
    <PortfolioDetails />
    <Footer class="bg-f9f9f9" />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";
import Footer from "../Layouts/Footer";

export default {
  name: "AboutOnePage",
  components: {
    Navbar,
    PageTitle,
    PortfolioDetails,
    Footer,
  },
};
</script>

<style scoped>
.vumy-nav .navbar .navbar-nav .nav-item .nav-link {
  color: blue !important;
}
.active-link {
    color: #FF004D!important;
  }
</style>
