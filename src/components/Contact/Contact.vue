<template>
  <div class="contact-info-area bg-f1f5fd">
    <div class="container d-flex align-items-stretch">
      <div class="row ">
        <div class="col-md-6 ">
          <div class="contact-info-inner">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-6 col-sm-6">
                <div class="col-lg-12 col-md-6 col-sm-6">
                <h3 class="contact-h3">Pošaljite nam poruku</h3>
                <hr class="contact-hr">
                <p class="contact-p">Naš tim stoji vam konstantno na raspolaganju. Bilo koja informacija ili pitanje koje možda imate za nas, pošaljite bez ustručavanja. Naš će tim odgovoriti u najkraćem mogućem roku s najboljom informacijom. </p>
                  <div class="single-contact-info-box padding-custom">
                    <div class="icon bg1">
                    

                    <i class="ph-phone-call"></i>
                    </div>
                    <h3>
                      <a href="#" class="smaller-a">Kontaktirajte nas</a><br>
                      <a href="tel:(+321) 895-980 008">+(385) 01-2828/120</a>
                    </h3>
                  </div>
                </div>
                <div class="col-lg-12 col-md-6 col-sm-6">
                  <div class="single-contact-info-box">
                    <div class="icon">
                      <i class="ph-envelope-simple-open"></i>
                    </div>
                    <h3>
                      <a href="#" class="smaller-a">Pošaljite upit</a><br>
                      <a href="mailto:info@cavalier.hr">info@cavalier.hr</a>
                    </h3>
                  </div>
                </div>
                <div class="col-lg-12 col-md-6 col-sm-6">
                  <div class="single-contact-info-box">
                    <div class="icon bg2">
                      <i class="ph-map-pin-line"></i>
                    </div>
                    <h3><a href="#" class="smaller-a">Posjetite nas</a><br>
                        <a href="#">Ilica 530, 10000 Zagreb, Hrvatska</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 padding-a">
          <div class="col-lg-12 col-md-12">
            <div class="contact-form">
              <form @submit.prevent>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Vaše ime</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Adresa e-pošte</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Naslov</label>
                      <input
                        type="text"
                        name="msg_subject"
                        class="form-control"
                        id="msg_subject"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Broj mobitela</label>
                      <input
                        type="text"
                        name="phone_number"
                        class="form-control"
                        id="phone_number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label>Poruka...</label>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="checkme"
                      />
                      <label class="form-check-label" for="checkme">
                        Prihvaćam
                        <a href="#">Politiku privatnosti</a>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" class="btn-style-one red-light-color padding-button">
                      Pošaljite poruku <i class="ph-caret-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<OurTeam/>

  <div class="contact-area pt-50">
    <div class="container">
      <h3>Naša lokacija</h3>
      <hr />
    </div>
    <div class="col-lg-12 col-md-12">
      <div id="maps">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=Ilica%20530,%2010000,%20Zagreb+(Cavalier)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import OurTeam from "../CavalierMain/OurTeam";

export default {
  name: "Contact",
   components: {OurTeam},
};
</script>
