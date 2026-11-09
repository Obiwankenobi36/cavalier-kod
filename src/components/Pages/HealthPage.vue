<template>
  <div>
    <Navbar />
    <PageTitle subTitle="Zdravlje" heding="Informacije o zdravlju psa"  class="about-page-banner" />
    <HealthGrid />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import HealthGrid from "../Health/HealthGrid";
import Footer from "../Layouts/Footer";

export default {
  name: "HealthPage",
  components: {
    Navbar,
    PageTitle,
    HealthGrid,
    Footer,
  },
};
</script>
