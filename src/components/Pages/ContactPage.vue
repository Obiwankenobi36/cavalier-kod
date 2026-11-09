<template>
  <div>
    <Navbar />
    <PageTitle
      subTitle="Kontakt"
      heding="Kontaktirajte nas još danas"
      class="about-page-banner"
    />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import Contact from "../Contact/Contact";
import Footer from "../Layouts/Footer";

export default {
  name: "ContactPage",
  components: {
    Navbar,
    PageTitle,
    Contact,
    Footer,
  },
};
</script>
