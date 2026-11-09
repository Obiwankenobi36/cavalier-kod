<template>
  <div
    class="template-footer-two"
    :class="{ 'with-top-border': !isPageAbout('/o-pasmini') }"
  >
    <div class="container" >
      <div class="row justify-content-center pb-4">
        <div class="d-flex justify-content-center">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/images/cavalier/logo.png" alt="logo" />
            <a  style="color: #c3c1c0 !important"><span class="font-type"><span class="c-color2">C</span><span class="c-color2">ava</span>lier</span></a>
          </router-link>
        </div>
      </div>
      <br />
      <div class="row justify-content-center pb-4">
        <div class="col-lg-4 d-flex justify-content-center left_footer">
          <div class="single-footer-widget">
            <ul class="footer-contact-info">
              <li>
                <i class="ph-phone-call" style="top: 0.22em; !important; font-size:30px !important; left:-0.4em;!important;"></i>
                <span style="font-size:15.5px !important;">Pon do Pet : 10:00 - 18:00</span><br />
                <a href="tel:+(385) 01-2828/120" style="font-size:15.5px !important;"
                  ><strong>+(385) 01-2828/120</strong></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-center left_footer">
          <div class="single-footer-widget">
            <ul class="footer-contact-info">
              <li>
                <i class="ph-envelope-simple-open" style="top: 0.22em; !important; font-size:30px !important; left:-0.3em;!important;"></i>
                <span style="font-size:15.5px !important;">Imate pitanja za nas?</span><br />
                <a href="mailto:info@cavalier.hr"
                  style="font-size:15.5px !important;"><strong>info@cavalier.hr</strong></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-center left_footer">
          <div class="single-footer-widget">
            <ul class="footer-contact-info">
              <li>
                <i class="ph-map-pin" style="top: 0.22em; !important; font-size:30px !important; left:-0.3em;!important;"></i>
                <span style="font-size:15.5px !important;">Pronađite nas na karti</span
                ><br/>
                <a href="#" target="_blank" style="font-size:15.5px !important;"><strong>Ilica 530, 10000 Zagreb, Hrvatska</strong></a>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row" style="background-color: #21315e">
        <div class="d-flex justify-content-center">
          <nav class="navbar navbar-expand-lg">
            <div class="navbar">
              <div class="navbar-nav">
                <router-link to="/" class="nav-item nav-link text-white"
                  >Naslovna</router-link
                >
                <router-link
                  to="/o-pasmini"
                  class="nav-item nav-link text-white"
                  >O pasmini</router-link
                >
                <router-link to="/psi" class="nav-item nav-link text-white"
                  >Psi</router-link
                >
                <router-link to="/zdravlje" class="nav-item nav-link text-white"
                  >Zdravlje</router-link
                >
                <router-link to="/novosti" class="nav-item nav-link text-white"
                  >Novosti</router-link
                >
                <router-link to="/faq" class="nav-item nav-link text-white"
                  >Pitanja</router-link
                >
                <router-link to="/kontakt" class="nav-item nav-link text-white"
                  >Kontakt</router-link
                >
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-7">
            <p>@{{ currentYear }} Cavalier. Sva prava pridržana.</p>
          </div>
          <div class="col-lg-6 col-md-5">
            <ul class="social-links">
              <li>
                <a
                  href="https://www.https://www.linkedin.com/.com/"
                  target="_blank"
                >
                  <i class="flaticon-facebook-app-symbol"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  <i class="flaticon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i class="flaticon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i class="flaticon-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    isPageAbout(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.nav-link:hover {
  color: var(--redLightColor) !important;
}
.nav-link.active {
  color: var(--redLightColor) !important;
}
</style>
