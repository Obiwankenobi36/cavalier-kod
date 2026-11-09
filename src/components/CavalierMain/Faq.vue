<template>
  <div class="faq-area  ptb-100">
    <div class="container">
      <div class="row m-0 align-items-end">
        <div class="col-lg-6 col-md-12 p-0">
          <div class="faq-accordion">
            <div class="section-title">
              <span class="sub-title">Često postavljena pitanja</span>
              <h2>Tu smo da pokažemo Cavaliere svijetu!</h2>
            </div>
            <div class="accordion" id="faqAccordion">
              <div
                class="accordion-item"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <button
                  class="accordion-button xs-weight show"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-controls="collapseOne"
                >
                  Koja je povijest pasmine Cavalier King  <br class="hide-xl"> Charles španijel?
                </button>
                <div
                  id="collapseOne"
                  class="accordion-collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      Cavalier King Charles španijel potječe iz Engleske i ima
                      dugu povijest koja seže unatrag stoljećima. Pasmina je
                      bila posebno popularna tijekom vladavine kralja Charlesa
                      II. i bila je omiljeni kućni ljubimac u plemićkim
                      krugovima.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <button
                  class="accordion-button xs-weight collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Jesu li Cavalier King Charles španijeli <br class="hide-xl">dobri psi pratitelji?
                </button>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      Da, Cavalier King Charles španijeli su izvrsni psi
                      pratitelji. Oni su vrlo privrženi svojim vlasnicima i vole
                      biti uključeni u sve aktivnosti obitelji. Oni su poznati
                      po svojoj nježnosti i spremnosti da pruže bezuvjetnu
                      ljubav i podršku.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <button
                  class="accordion-button xs-weight collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Koliko su Cavalier King Charles španijeli <br class="hide-xl">pogodni za
                  stanovanje <br class="hide-xxl">u stanu?
                </button>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      Cavalier King Charles španijeli se dobro prilagođavaju
                      stanovanju u stanu. Budući da su srednje veličine i nemaju
                      pretjerane zahtjeve za fizičkom aktivnošću, mogu biti
                      sretni i zadovoljni unutar doma, pod uvjetom da im se
                      pruži dovoljno pažnje, ljubavi i redovite šetnje.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <button
                  class="accordion-button xs-weight collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Mogu li Cavalier King Charles španijeli <br class="hide-xl">biti osjetljivi na <br class="hide-xxl">razdvajanje?
                </button>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      Cavalier King Charles španijeli su vrlo privrženi svojim
                      vlasnicima i mogu postati anksiozni ili tužni kada su
                      razdvojeni od njih. Stoga, važno je pružiti im dovoljno
                      društva, stimulacije i pažnje kako bi se smanjila njihova
                      osjetljivost na razdvajanje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 p-0">
          <div class="faq-image" data-aos="fade-up">
            <img class="faq-image-adj"
              src="../../assets/images/cavalier/istockphoto-1145272394-170667a-removebg-preview2.png"
              alt="faq-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
};
</script>
