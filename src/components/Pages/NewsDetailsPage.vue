<template>
  <div>
    <Navbar />
    <br>
    <br>
    <NewsDetails :newsId="this.newsId" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import NewsDetails from "../NewsDetails/NewsDetails";
import Footer from "../Layouts/Footer";

export default {
  name: "NewsDetailsPage",
  data() {
    return {
      news: [
        {
          id: 1,
          subTitle: "Kupnja",
          title: "Na što pripaziti prije odluke o kupnji Cavaliera?",
        },
        {
          id: 2,
          subTitle: "Terapija",
          title: "Cavalieri: Terapijski psi, na pomoć ljudima",
        },
        {
          id: 3,
          subTitle: "Zdravlje",
          title: "Savjeti za njegu i odgoj psa - za sretnijeg prijatelja",
        },
      ],
      newsId: null,
      newsDetails: {
        id: null,
        title: null,
        subTitle: null,
      },
    };
  },
  components: {
    Navbar,
    PageTitle,
    NewsDetails,
    Footer,
  },
  mounted() {
    this.newsId = this.$route.params.id;

    if (this.newsId == 1) {
      this.newsDetails = this.news[0];
    } else if (this.newsId == 2) {
      this.newsDetails = this.news[1];
    } else if (this.newsId == 3) {
      this.newsDetails = this.news[2];
    }
    console.log(this.newsDetails);
  },
};
</script>
