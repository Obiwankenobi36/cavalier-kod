<template>
  <div class="widget-area">
    <div class="widget widget_search">
      <h3 class="widget-title"><span>Pretraga</span></h3>
      <form class="search-form" @submit.prevent>
        <input type="search" class="search-field" placeholder="Pretražite..." />
        <button type="submit"><i class="ph-magnifying-glass"></i></button>
      </form>
    </div>
    <div class="widget widget_categories">
      <h3 class="widget-title"><span>Kategorije</span></h3>
      <ul>
        <li>
          <router-link to=""
            >Kupnja <span class="count">(6)</span></router-link
          >
        </li>
        <li>
          <router-link to=""
            >Terapija <span class="count">(4)</span></router-link
          >
        </li>
        <li>
          <router-link to=""
            >Zdravlje <span class="count">(5)</span></router-link
          >
        </li>
        <li>
          <router-link to=""
            >Trikovi <span class="count">(3)</span></router-link
          >
        </li>
        <li>
          <router-link to=""
            >Bez kategorije <span class="count">(1)</span></router-link
          >
        </li>
      </ul>
    </div>
    <div class="widget widget_vumy_posts_thumb">
      <h3 class="widget-title"><span>Popularne novosti</span></h3>
      <div class="item">
        <router-link to="/novosti-detalji/1" class="thumb">
          <img
            src="../../assets/images/cavalier/novosti/novosti-2.jpg"
            alt="blog-image"
          />
        </router-link>
        <div class="info">
          <h4 class="title">
            <router-link to="/novosti-detalji/1"
              >Prekrasni pratitelji: Zašto su Cavalieri idealni za obitelji i
              pojedince!</router-link
            >
          </h4>
          <span class="date">9 Srp, 2023</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/novosti-detalji/3" class="thumb">
          <img
            src="../../assets/images/cavalier/various/exLumineBP36-48.jpg"
            alt="blog-image"
          />
        </router-link>
        <div class="info">
          <h4 class="title">
            <router-link to="/novosti-detalji/3"
              >Simpatični terapeuti: Kako su Cavalier King Charles španijeli
              postali omiljeni u terapijskim zajednicama!</router-link
            >
          </h4>
          <span class="date">6 Lip, 2023</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/novosti-detalji/2" class="thumb">
          <img
            src="../../assets/images/cavalier/psi/Sia/_DSC3645.jpg"
            alt="blog-image"
          />
        </router-link>
        <div class="info">
          <h4 class="title">
            <router-link to="/novosti-detalji/2"
              >Čarolija ljubavi: Otkrijte nježnost i privrženost Cavalier
              pasa!</router-link
            >
          </h4>
          <span class="date">3 Lip, 2023</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/novosti-detalji/3" class="thumb">
          <img
            src="../../assets/images/cavalier/novosti/novosti-5.jpeg"
            alt="blog-image"
          />
        </router-link>
        <div class="info">
          <h4 class="title">
            <router-link to="/novosti-detalji/2"
              >Zavodljivi Cavalier King Charles španijeli: Pravi favoriti među
              ljubiteljima pasa!</router-link
            >
          </h4>
          <span class="date">10 Svi, 2023</span>
        </div>
      </div>
    </div>
    <div class="widget widget_follow_us">
      <h3 class="widget-title"><span>Zapratite nas</span></h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Pinterest</a></li>
        <li><a href="#">Linkedin</a></li>
      </ul>
    </div>
    <div class="widget widget_tag_cloud">
      <h3 class="widget-title"><span>Tagovi</span></h3>
      <div class="tagcloud">
        <router-link to="/novosti">Cavalieri</router-link>
        <router-link to="/novosti">Zdravlje</router-link>
        <router-link to="/novosti">Terapija</router-link>
        <router-link to="/novosti">Životni stil</router-link>
        <router-link to="/novosti">Psi</router-link>
        <router-link to="/novosti">Ljubimci</router-link>
        <router-link to="/novosti">Oglašavanje</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
};
</script>
