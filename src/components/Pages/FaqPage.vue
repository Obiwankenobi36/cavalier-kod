<template>
  <div>
    <Navbar />
    <PageTitle
      subTitle="Pitanja"
      heding="Često postavljena pitanja"
      class="about-page-banner"
    />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import Faq from "../Faq/Faq";
import PageTitle from "../Common/PageTitle";
import Footer from "../Layouts/Footer";

export default {
  name: "FaqPage",
  components: {
    Navbar,
    Faq,
    PageTitle,
    Footer,
  },
};
</script>
