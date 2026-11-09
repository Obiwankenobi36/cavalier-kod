<template>
  <div class="background-image-container" data-aos="fade-up"
        data-aos-duration="1200">
    <div class="image-overlay p-bottom">
     <div class="section-title p-top">
        <span class="sub-title ">Saznajte</span>
        <h2>Što nudimo</h2>
      </div>
      <div class="image-container align">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
           
          viewBox="0 0 800 430" 
        >
          <image href="../../assets/images/cavalier/homepage/siaD.svg" width="100%" height="100%" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Diagram",
};
</script>

<style>
.background-image-container {
  width: 100%;
  position: relative;
  background: url('../../assets/images/cavalier/bone-bg.png') center/cover no-repeat;
  overflow: hidden;
  margin-bottom:-1px;
}

.image-overlay {
  position: relative;
  width: 100%;
  padding-bottom: 50%; 
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 800px ;
  height: 430px;
  margin: auto;
}


</style>
