<template>
  <div>
    <Navbar />
    <PageTitle
      :subTitle="this.newsDetails.subTitle"
      :heding="this.newsDetails.title"
    />
    <HealthDetails :newsId="this.newsId" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar";
import PageTitle from "../Common/PageTitle";
import HealthDetails from "../HealthDetails/HealthDetails";
import Footer from "../Layouts/Footer";

export default {
  name: "HealthDetailsPage",
  data() {
    return {
      news: [
        {
          id: 1,
          subTitle: "Zdravlje",
          title: "Standardi zdravlja",
        },
        {
          id: 2,
          subTitle: "Zdravlje",
          title: "Genteski testovi - DNA",
        },
        {
          id: 3,
          subTitle: "Zdravlje",
          title: "Zdravstvene poteškoće psa",
        },
        {
          id: 4,
          subTitle: "Zdravlje",
          title: "Zdravstveni i DNA testovi",
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
    HealthDetails,
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
    } else if (this.newsId == 4) {
      this.newsDetails = this.news[3];
    }
    console.log(this.newsDetails);
  },
};
</script>
