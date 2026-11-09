<template>
<div class="business-banner-area ">
  <div class="overlay2"></div>
  <div class="container-fluid">
    <div class="col-xl-5 col-lg-12 col-md-12">
      <div class="distance-learning-banner-content full-size" style="position: relative; ">
        <h1
          class=""
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          style="color: darkgrey; position: relative; z-index: 2;"
        >
          Mali, ali veseli četveronožni
          <p class="hero-subtitle"><span id="typed" class="typed" data-typed-items="ljubimci, prijatelji"></span></p>
        </h1>

        <div
          class="btn-box"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <router-link to="/o-pasmini" class="btn-style-one red-light-color" style="border-radius: 30px; padding: 8px 45px 8px 30px;">
            O pasmini
            <i class="ph-caret-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>



<div>
  <svg class="hero-waves dont" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="wave1">
          <use xlink:href="#wave-path" x="50" y="3" fill="#7c7c7c"></use>
        </g>
        <g class="wave2">
          <use xlink:href="#wave-path" x="50" y="0" fill="#cbc5c5"></use>
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>
</div> 

<div class=" custom32">

    <svg class="hero-waves custom3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
  <defs>
    <path id="wave-path" d="M-160 44c9-2 20 2 30-2s10-8 30-2s20 8 30-2s20-8 30-2s20 8 30-2s20-4 30 0v44h-704z"></path>
  </defs>
  <g class="">
    <use xlink:href="#wave-path" x="100" y="4" fill="#fff"></use>
  </g>
</svg>



</div> 


</template>

<script>
export default {
  name: "MainBanner",

  
};
</script>
