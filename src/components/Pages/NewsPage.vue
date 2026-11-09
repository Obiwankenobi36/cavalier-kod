<template>
  <div>
    <Navbar />
    <PageTitle
      subTitle="Novosti"
      heding="Naši najnoviji članci i vijesti o Cavalierima"
      class="about-page-banner"
    />
    <NewsGrid />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import NewsGrid from "../NewsGrid/NewsGrid";
import Footer from "../Layouts/Footer";

export default {
  name: "NewsPage",
  components: {
    Navbar,
    PageTitle,
    NewsGrid,
    Footer,
  },
};
</script>
