<template>
  <div class="container">
    <div class="row">
      <div class="section-title">
        <span class="sub-title">Cavalier King Charles španijel</span>
        <h2>Naši istaknuti Cavalieri</h2>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xl-4 col-lg-6 col-md-6"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div class="single-blog-post">
          <div class="image">
            <router-link to="/psi" class="d-block">
              <img
                src="../../assets/images/cavalier/psi/Naya/_DSC3295.jpg"
                alt="blog-image"
              />
            </router-link>
          </div>
          <div class="content">
            <ul class="meta">
              <li>
                <i class="ph-paw-print"></i>
                <a href="blog-tag.html">Naya</a>
              </li>
              <li>
                <i class="ph-dog"></i>
                2 godine
              </li>
            </ul>
            <h3>
              <router-link to="/blog-details"
                >Naya - nježna kujica sa blagom i pažljivom
                prirodom</router-link
              >
            </h3>
          </div>
        </div>
      </div>
      <div
        class="col-xl-4 col-lg-6 col-md-6"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div class="single-blog-post">
          <div class="image">
            <router-link to="/novosti-detalji/1" class="d-block">
              <img
                src="../../assets/images/cavalier/psi/Nelson/_DSC3128.jpg"
                alt="blog-image"
              />
            </router-link>
          </div>
          <div class="content">
            <ul class="meta">
              <li>
                <i class="ph-paw-print"></i>
                <a href="blog-tag.html">Nelson</a>
              </li>
              <li>
                <i class="ph-dog"></i>
                4.5 godine
              </li>
            </ul>
            <h3>
              <router-link to="/blog-details"
                >Nelson - privržen, topao i zaigran mališan</router-link
              >
            </h3>
          </div>
        </div>
      </div>
      <div
        class="col-xl-4 col-lg-6 col-md-6"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div class="single-blog-post">
          <div class="image">
            <router-link to="/novosti-detalji/1" class="d-block">
              <img
                src="../../assets/images/cavalier/psi/Noah/_DSC3680.jpg"
                alt="blog-image"
              />
            </router-link>
          </div>
          <div class="content">
            <ul class="meta">
              <li>
                <i class="ph-paw-print"></i>
                <a href="blog-tag.html">Noah</a>
              </li>
              <li>
                <i class="ph-dog"></i>
                1.5 godina
              </li>
            </ul>
            <h3>
              <router-link to="/blog-details"
                >Noah - živahan i veseo, sa razigranim stavom</router-link
              >
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FeaturedDogs",


};

</script>
