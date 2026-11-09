<template>



  <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue hover-div" @click="openTabAndScroll(1)">
              <div class="icon" >
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                </svg>
                <i class="bx bx-heart"></i>
              </div>
              <h4>Standardi zdravlja</h4>
              <p>Pritiskom na ovu karticu saznajte najvažnije o standardima zdravlja vašeg psa</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-orange hover-div " @click="openTabAndScroll(2)">
              <div class="icon" >
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                  
                </svg>
                <i class="bx bx-file"></i>
              </div>
              <h4>Genetski testovi - DNA</h4>
              <p>Pritiskom na ovu karticu saznajte najvažnije o genetskim testovima koje morate napraviti </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-pink hover-div" @click="openTabAndScroll(3)">
              <div class="icon"  >
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                </svg>
                <i class="bx bxs-dog"></i>
              </div>
              <h4>Zdravstvene poteškoće psa</h4>
              <p>Pritiskom na ovu karticu saznajte najvažnije o mogućim poteškoćama koje vaš pas može imati</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow hover-div" @click="openTabAndScroll(4)">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                </svg>
                <i class="bx bx-layer"></i>
              </div>
              <h4>Zdravstveni i DNA testovi</h4>
              <p>Pritiskom na ovu karticu saznajte najvažnije o normama za zdravlje i DNA testovima</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-red hover-div" @click="openTabAndScroll(5)">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                </svg>
                <i class="bx bx-error"></i>
              </div>
              <h4>Potencijalne opasnosti</h4>
              <p>Pritiskom na ovu karticu saznajte najvažnije o potencijalnim opasnostima za vašeg psa</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal hover-div"  @click="openTabAndScroll(6)">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <i class="bx bx-arch"></i>
              </div>
              <h4>Obitavalište ljubimca</h4>
              <p>Pritiskom na ovu karticu saznajte najvažnije o tome kakvo treba biti obitavalište ljubimca</p>
            </div>
          </div>

        </div>

      </div>
    </section>


     <section id="features" class="features">
      <div class="container">

        <div class="section-title">
          <h2>Zdravlje</h2>
          <p>Odaberite kategoriju</p>
        </div>

        <div class="row padding_add">
          <div class="col-lg-3 xs-custom-pad">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Standardi zdravlja</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Genetski testovi - DNA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Zdravstvene poteškoće psa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Zdravstveni i DNA testovi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Potencijalne opasnosti</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-6">Obitavalište ljubimca</a>
              </li>
            </ul>
            <div class="containerI display_none">
              <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

              <div class="overlay radius">
                <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                <p class="text">Imate li više pitanja?</p>
                <p class="text2">Nazovite nas</p>
                <strong class="text">+385 91 28875</strong>
              </div>
            </div>
          </div>
          
          <div class="col-lg-9 mt-4 mt-lg-0 adjust_padding">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1">
                    <div class="services-details-area">
                      <h5><strong>OPĆI IZGLED</strong></h5>
                      <p>
                        Aktivan, dražestan i uravnotežen, vrlo blagog izražaja. PONAŠANJE /
                        TEMPERAMENT: Živahan i odvažan, privržen, bez straha. Veseo, prijateljski
                        raspoložen, neagresivan; ne pokazuje znakove razdražljivosti.
                      </p>
                      <h5><strong>Glava</strong></h5>

                      <p>LUBANJSKI DIO Lubanja - Gotovo ravna između ušiju. Stop - Blag.</p>
                      <h5><strong>Predio lica</strong></h5>
                      <p>
                        Nos - Nosnice crne i dobro razvijene, bez neobojanih područja. Njuška -
                        Dužina između stopa i vrha nosa iznosi oko 3,8 cm. Stanjuje se. Lice dobro
                        ispunjeno ispod očiju. Nepoželjna je bilo koja naznaka šiljatosti. Usnice
                        - Dobro razvijene, nisu viseće. Vilice/Zubi - Jake vilice, savršen,
                        pravilan i potpun škarasti zagriz tj. gornji zubi tijesno preklapaju donje
                        zube i usađeni su okomito u vilice. Oči - Velike, tamne, okrugle, ali ne
                        izbočene; dobro međusobno razmaknute. Uši - Dugačke, visoko nasađene,
                        bogato odlakane zastavicama.
                      </p>
                      <h5><strong>Vrat</strong></h5>
                      <p>Srednje dužine, blago povijen.</p>
                      <h5><strong>Tijelo</strong></h5>
                      <p>
                        Leđa - Ravna. Slabine - Pribrane (kratke). Prsa - Umjerena; rebra dobro
                        zasvođena. REP:Dužina repa je u skladu s tijelom, dobro nasađen, nošen
                        veselo, ali ne mnogo iznad linije leđa. Kada je u prošlosti kupiranje repa
                        bilo moguće uklanjala se najviše jedna trećina dužine. UDOVI: PREDNJI
                        UDOVI Opći izgled - Noge srednje jakih kostiju, ravne. Ramena - Dobro
                        položena prema leđima. Prednje šape - Kompaktne, dobrih jastučića i dobro
                        odlakane. STRAŽNJI UDOVI: Opći izgled - Noge srednje jakih kostiju.
                        Koljena - Dobro povijena. Došaplja - Bez naznaka kravljeg ili O-stava.
                        Stražnje šape - Kompaktne, dobrih jastučića i dobro odlakane.
                      </p>

                      <h5><strong>Hod/kretanje</strong></h5>
                      <p>
                        Kretanje slobodno i elegantno, dobar potisak odostraga. Prednje i stražnje
                        noge kreću se paralelno gledano od naprijed i odostraga. POKROV: DLAKA
                        Dugačka, svilenasta, bez kovrči. Blaga valovitost dozvoljena. Obilje
                        zastavica. Dlaka potpuno netrimana. BOJA Priznate boje su: - Crna s
                        paležom: gavran crna boja s oznakama paleža iznad očiju, po obrazima, s
                        unutarnje strane ušiju, po prsima i nogama, s donje strane repa. Palež
                        treba biti jasan. Bijele oznake nepoželjne. - Ruby: Jednobojna bogata
                        crvena boja. Bijele oznake su nepoželjne. Blenheim: Oznake bogate boje
                        kestena dobro raspoređena po biserno bijeloj podlozi. Oznake jednakomjerno
                        raspoređene po glavi, ostavljajući prostor između ušiju za vrlo cijenjenu
                        “lozenge” oznaku ili točku (jedinstvena karakteristika pasmine).
                        -Trobojni: Crna i bijela boja dobro rasprostranjene, dobro raspoređene, s
                        oznakama boje paleža iznad očiju, po obrazima, s unutarnje strane ušiju,
                        po prsima i nogama, s donje strane repa. Bilo koja druga boja li
                        kombinacija boja je izrazito nepoželjna. TEŽINA: Od 5.4 do 8 kg. Poželjno
                        je da je malen, dobro izbalansiran pas unutar srednjih vrijednosti težine.
                      </p>

                      <h5><strong>Greške</strong></h5>
                      <p>
                        Bilo koje odstupanje od gore navedenih karakteristika treba smatrati
                        greškom, a težinu greške treba promotriti u odnosu na njezinu veličinu i
                        utjecaj na zdravlje i dobrobit psa. DISKVALIFIKACIJSKE GREŠKE: Agresivni
                        ili pretjerano plahi psi. Svaki pas koji jasno pokazuje anomalije u građi
                        ili ponašanju. N.B. Mužjaci trebaju imati dva očigledno normalna testisa
                        potpuno spuštena u skrotum. U uzgoju treba upotrebljavati samo
                        funkcionalno i klinički zdrave pse koji su tipične pasminske građe. (HKS
                        Standardi pasmina)
                      </p>
                   </div>
                   <div class="containerI content-show">
                    <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

                    <div class="overlay radius">
                      <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                      <p class="text">Imate li više pitanja?</p>
                      <p class="text2">Nazovite nas</p>
                      <strong class="text">+385 91 28875</strong>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1">
                    <div class="services-details-area">
                    <h5><strong>DNA</strong></h5>
                      <p>
                        Pakiranje specifično za pasminu kavalirske kraljevske španijele (uključujući profil DNA) uključuje testove za CC/DE (kovrčava dlaka/suho oko) i EF (epizodično padanje).
                      </p>
                      <p>
                        Što je uključeno? Paket za kavalirske kraljevske španijele uključuje sljedeće DNA testove:
                      </p>
                      <ul>
                        <li>CC/DE (kovrčava dlaka/suho oko)</li>
                        <li>EF (epizodično padanje)</li>
                        <li>Profil DNA (SNP - ISAG 2020)</li>
                      </ul>

                      <p>
                        Također ćete dobiti tiskani vodič koji objašnjava svaki test, što rezultati znače i kako možete koristiti tu informaciju tijekom uzgoja.
                      </p>

                      <h5><strong>Kako to funkcionira?</strong></h5>
                      <p>
                        Poslat ćemo vam set za prikupljanje uzoraka izravno na vaša vrata, ali nije potrebno biti kod kuće jer će kutija proći kroz vašu poštansku rupu. Sve što trebate učiniti je brisati unutrašnjost obraza svog psa pomoću priloženih brisača i vratiti ih putem priložene omotnice. Obično nam treba samo jedan bris za sve testove, međutim, naši setovi za prikupljanje uzoraka sadrže dva brisa kako bismo bili sigurni da prikupljamo dovoljno DNA i imamo dodatan bris ako nešto nije u redu s prvim. Mi ćemo obaviti ostatak posla i poslati vam rezultate čim budu spremni.
                      </p>
                      <h5><strong>Kada ću dobiti rezultate?</strong></h5>
                      <p>
                        Rezultati i DNA profil bit će vam poslani e-poštom čim budu spremni. Također će automatski biti učitani u zapis vašeg psa, a ubrzo nakon toga primit ćete certifikat putem pošte. Vremena obrade ovise o promjenjivim faktorima, ali ciljamo vratiti rezultate u roku od 35 radnih dana od primitka uzoraka. Ponekad laboratorij mora ponovno izvršiti testiranje uzorka. To se naziva ponovno testiranje i u tim slučajevima vrijeme obrade se neizbježno produžuje, ali ćemo vas obavijestiti i obavijestiti o očekivanim kašnjenjima.
                      </p>
                      <h5><strong>Kako prikupiti DNA od svog psa?</strong></h5>
                          <p>
                            Prikupljanje uzorka DNA od vašeg psa ne može biti jednostavnije i nije potrebno posjetiti veterinara. Poslat ćemo vam dva mala četkice, poznate kao brisači za usta/obraze, koje možete koristiti da nježno trljate unutrašnjost obraza svog psa, uzrokujući da se slobodne stanice obraza zalijepe za čekinje. To je potpuno bezbolno za vašeg psa, a cijeli postupak traje samo nekoliko minuta. Zatim, bris treba vratiti u laboratorij, gdje će stanice obraza biti razbijene, a DNA će biti analizirana.
                          </p>
                          <h5><strong>Koliko star mora biti moj pas? </strong></h5>
                          <p>
                            Nema zahtjeva za dob testiranja DNA - DNA psa ostaje ista tijekom cijelog njegovog života. Kada testiramo mlade štenad, preporučujemo da ih udaljite od njihove majke sat vremena prije prikupljanja uzorka kako biste izbjegli kontaminaciju.
                          </p>
                          <h5><strong>Zašto testirati svog psa? </strong></h5>
                          <p>
                           Razumijevanje genetike vašeg psa pružit će vam informacije koje su vam potrebne kako biste se pripremili za budućnost svog psa. Poznavanje unaprijed bolesti koje bi vaš pas mogao razviti omogućuje vam poduzimanje preventivnih mjera za podršku njegovom zdravlju i potencijalno izbjegavanje skupih veterinarijskih računa za dijagnostičke testove i tretmane kasnije. Ako razmišljate o uzgoju svog psa, tada će poznavanje genetike smanjiti rizik od dobivanja štenadi pogođene nasljednim uvjetima. Pružanje mira vama i novim vlasnicima štenaca, znajući da zdravlje vaših štenaca nije ostavljeno slučaju.
                          </p>
                          <h5>
                            <strong
                              >Mogu li koristiti ovu uslugu ako moj pas nije registriran kod The Kennel Club?</strong
                            >
                          </h5>
                          <p>
                            Da, apsolutno, samo nećemo moći zabilježiti rezultate na našoj web stranici. Prilikom narudžbe unesite broj mikročipa vašeg psa i pasminu.
                          </p>
                          <h5><strong>Što je DNA profil?</strong></h5>
                          <p>
                            DNA profil daje vam jedinstveni genetski kod vašeg psa. Možete ga smatrati genetskim otiskom prsta vašeg psa. To omogućuje točnu identifikaciju vašeg psa i može se koristiti za potvrdu njihovog podrijetla. Za razliku od drugih načina identifikacije, DNA profil ostaje isti tijekom cijelog života psa i ne može se izgubiti, manipulirati ili uništiti. Zahvaljujući vrhunskoj tehnologiji laboratorija, nudimo industrijski standardni SNP DNA profil (ISAG 2020). Primit ćete certifikat koji potvrđuje da je vaš pas profiliran, s kopijom profila. Profil će također biti pohranjen u našu bazu podataka za kontinuiran pristup, ako ga želite koristiti u budućnosti. DNA profil nije test dodjele pasmine i neće vam reći kojoj pasmini ili pasminama vaš pas pripada.
                          </p>
                        </div>
                        <div class="containerI content-show">
                      <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

                      <div class="overlay radius">
                        <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                        <p class="text">Imate li više pitanja?</p>
                        <p class="text2">Nazovite nas</p>
                        <strong class="text">+385 91 28875</strong>
                      </div>
                  </div>
                  </div>

                    
                  
                </div>
              </div>

              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1">
                    <div class="services-details-area">
                      <h4>
                        <strong
                          >NASLIJEDNI ZDRAVSTVENI PROBLEMI KOD CAVALIER KING CHARLES ŠPANIJELA</strong
                        >
                      </h4>
                      <p>
                        Gotovo nijedan od sljedećih problema nije prirođen (tj. prisutan pri rođenju), već se razvijaju kasnije bez gornje dobne granice za početak pojave. Stvarni simptomi obično se počinju pokazivati između 2. i 6. godine života, iako su moguće i mlađe i starije dobne pojave. Prosječni životni vijek kavalira kreće se između 9 i 14 godina.
                      </p>
                      <p>
                        Izuzimajući siringomijeliju, sljedeći problemi dijagnosticiraju se putem jednostavnih, neinvazivnih, jeftinih, lako dostupnih i bezbolnih testova.
                      </p>
                      <h5><strong>Srce</strong></h5>
                      <p>
                        Kronična, degenerativna bolest mitralnog zaliska (MVD). Prvi znak je šum. Drugi defekti srca uključuju stenoze plućne i aortne arterije te PDA (patentni dotok arterioznih). Dijagnoza bi trebala biti postavljena od strane veterinarskog kardiologa s certifikatom.
                      </p>
                      <h5><strong>Oči</strong></h5>
                      <p>
                        Juvenilna katarakta i displazija ili nabori mrežnice. Progresivna atrofija mrežnice (PRA) također se pojavljuje kod kavalira, ali nije prevalenta. Dijagnoza bi trebala biti postavljena od strane veterinarskog oftalmologa s certifikatom.
                      </p>
                      <h5><strong>PATELARNA LUKSUZACIJA</strong></h5>
                      <p>
                        Poznata kao klizanje patela. Čak i prilično ozbiljna patelarna luksacija možda neće uzrokovati puno nelagode, pogotovo dok je kavalir mlad. Kirurška intervencija je opcija ako kavalir osjeća bol, kvaliteta mu je narušena ili kako bi se spriječilo nepovratno propadanje zgloba. Dijagnoza bi trebala biti postavljena od strane općeg praktičara i najlakša je od svih testova za izvođenje.
                      </p>
                      <h5><strong>DISPLAZIJA KUKA</strong></h5>
                      <p>
                        Zbog male veličine pasmine, očiti klinički simptomi obično se ne pojavljuju sve dok kavalir nije stariji, a tada uglavnom samo kod ozbiljno pogođenih pasa. Dijagnoza bi trebala biti postavljena rendgenskim snimkama u dobi od 2 godine ili starije, poslanih Orthopedic Foundation for Animals (OFA), i vrijede doživotno. Snimke snimljene prije 2 godine smatraju se preliminarnom dijagnozom, te se preporučuje ponovna evaluacija kukova u dobi od 2 godine.
                      </p>
                      <h5><strong>LEĐA</strong></h5>
                      <p>Degenerativna bolest intervertebralnih diskova.</p>
                      <h5><strong> EPILEPSIJA</strong></h5>
                      <p>
                        Mogući su veliki napadaji, ali moguća su i različita oblika fokalnih (petit mal) napadaja. Najčešći fokalni napadaj naziva se "Fly Catcher's Syndrome", gdje pas udara ili trza prema imaginarnim muhama. Postoji mnogo drugih vrsta fokalnih napadaja koji se mogu pojaviti. Svi tipovi napadaja mogu se liječiti fenobarbitalom i/ili kalijevim bromidom i drugim lijekovima po potrebi.
                      </p>
                      <h5><strong>GLUHOĆA</strong></h5>
                      <p>
                        Potpuna gluhoća rijetko je prirođena. Gluhoća kavalira obično je djelomična i/ili prijevremena prirode. Neki kavaliri postaju potpuno gluhi do 6-8 godina. Testiranje BAER-om dostupno je za procjenu gubitka sluha.
                      </p>
                      <h5>
                        <strong>IMUNOLOŠKI SUSTAV</strong>
                      </h5>
                      <p>
                        Ovi poremećaji mogu uključivati, ali nisu ograničeni na alergije, probavne ili metaboličke poremećaje, suho oko, rak, problema s plodnosti i/ili uzgojem, poremećaji mišića ili živaca, problemi s štitnjačom, krvni problemi (uglavnom autoimuna hemolitička anemija i/ili trombocitopenija), itd.
                      </p>
                      <h5><strong>SIRINGOMIJELIJA ("SM")</strong></h5>
                      <p>
                        Stanje koje je potencijalno uzrokovano previsokom stražnjom kosti lubanje, sprječavajući slobodno kruženje cerebrospinalne tekućine. Tekućina je prisiljena u kralježnicu stvarajući šupljinu nazvanu siring. Najčešći znak ovog stanja je čeprkanje ramena/vrata/uha (bez vidljivih znakova bolesti kože ili uha), pogotovo kad je pas uzbuđen ili hoda na povodcu - obično s jedne strane, ali može postati bilateralno. Pogođeni psi također mogu biti osjetljivi oko glave, vrata i prednjih udova, a često jecaju/vrište/bez razloga. Bol može biti povezana s položajem glave, a neki psi radije spavaju ili jedu s podignutim glavama. Neki ozbiljno pogođeni mladi psi razvijaju skoliozu vrata, tj. - njihovo se vratom vrtilo. Neki psi mogu razviti šepajući hod zadnjim udovima i/ili slabost prednjih udova. Znakovi se obično prepoznaju između 6 mjeseci i 3 godine, iako psi bilo koje dobi mogu početi pokazivati simptome. Jedini siguran način za dijagnosticiranje siringomijelije i povezane deformacije lubanje je pomoću MRI skeniranja. Nažalost, ovaj skupi test, obično izveden od strane neurologa, dostupan je samo u specijaliziranim veterinarskim centrima. (Reference: www.cavaliersonline.com/health/syringoinfo.htm, www.thecavalierclub.co.uk/health/syringo.html)
                      </p>
                    </div>
                    <div class="containerI content-show">
                    <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

                    <div class="overlay radius">
                      <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                      <p class="text">Imate li više pitanja?</p>
                      <p class="text2">Nazovite nas</p>
                      <strong class="text">+385 91 28875</strong>
                    </div>
                    </div>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/features-3.png" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1">
                     <div class="services-details-area">
                      <h5><strong>ZDRAVLJE</strong></h5>
                      <p>
                        Svi odrasli Cavalier King Charles Španijeli trebaju se godišnje pregledavati kod veterinara radi srčanog šuma iznad mitralnog zaliska i kod veterinarskog oftalmologa radi poremećaja očiju. Iskusni vlasnik kavalira zna da neki od CKCS kinoloških klubova i drugih kinoloških klubova povremeno nude klinike za zdravstvene pretrage, obično u vezi s izložbama konformacija. Klinike kavalirskih klubova obično uključuju veterinarskog kardiologa i/ili veterinarskog oftalmologa s certifikatom, koji će pregledati psa i dati pisanu ocjenu stanja srca i očiju, po sniženoj cijeni.
                      </p>
                      <h5><strong>Testovi srca/karidovaskularni testovi</strong></h5>
                      <p>
                        Kardiolog će pregledati psa koristeći stetoskop (auskultacija) kako bi utvrdio ima li pas šum na mitralnom zalisku i koji je stupanj šuma. (Vidi Mitral Valve Disease za raspravu o stupnjevima šuma kod MVD-a.) Pripremit će pismeno izvješće o dijagnozi srca koje vlasnik može ponijeti veterinaru radi daljnje njege. Zamolite kardiologa da koristi ovaj standardizirani obrazac izvješća. To je vrijedna informacija za vlasnike koji već ne znaju da njihovi kavaliri imaju bolest mitralnog zaliska. Međutim, kada se kavaler jednom dijagnosticira s MVD-om, od presudne je važnosti da vlasnik redovito, barem jednom godišnje, odvede psa veterinarskom kardiologu na daljnje preglede napredovanja bolesti i propisivanje tretmana. Vlasnik čiji je kavalir pogođen MVD-om ne bi se trebao oslanjati isključivo na periodične posjete kardiolozima na zdravstvenim klinikama za pravilnu skrb o pogođenom psu.
                      </p>
                      <h5><strong>Testovi očiju/vizualni testovi</strong></h5>
                      <p>
                        Oftalmolog će pregledati proširene oči psa radi različitih poremećaja. (Vidi Eyes za popis njih.) Također će pripremiti pismeno izvješće, obično koristeći obrazac koji pruža Canine Eye Registration Foundation (CERF) ili Eye Certification Registry (CAER) Zaklade za ortopediju životinja.
                      </p>
                      <h5><strong>Testovi štitnjače i drugi testovi krvi</strong></h5>
                      <p>
                        Psi bi trebali postiti 12 sati prije testova krvi. Ženke ne bi smjele biti mlađe od 1 mjeseca ili bliže dolasku u sezonu ili previše blizu izlaska iz sezone ako su netaknute. Za više informacija o Testu štitnjače, pogledajte ovu stranicu našeg web mjesta: Thyroid Panel.
                      </p>
                      <h5><strong>Testovi kuka, patele, sluha, štitnjače i drugi testovi</strong></h5>
                      <p>
                        Za više informacija o drugim specijalnostima navedenim u Tablici 2, pogledajte ove stranice našeg web mjesta: Hip X-Rays, Patellas, BAER Clinic, Neurologists.
                      </p>
                      <h5><strong>MRI skeniranje za siringomijeliju</strong></h5>
                      <p>
                        Ako tražite klinike koje nude MRI skeniranje, rijetko ih ima. Međutim, nudimo popis na ovoj web stranici. Informacije o klinikama na tom popisu možda nisu aktualne, pa obavezno nazovite njihov ured kako biste potvrdili pojedinosti i troškove trenutačno ponuđenih skeniranja.
                      </p>
                    </div>
                    <div class="containerI content-show">
                    <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

                    <div class="overlay radius">
                      <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                      <p class="text">Imate li više pitanja?</p>
                      <p class="text2">Nazovite nas</p>
                      <strong class="text">+385 91 28875</strong>
                    </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="tab-pane" id="tab-5">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1">
                     <div class="services-details-area">
                      <h5><strong>NA ŠTO PAZITI</strong></h5>
                      <p>
                        Cavalier King Charles španijel je pasmina koja osvaja srca svojom ljubaznošću, privrženošću i elegancijom. Međutim, kao i kod svake pasmine, vlasnici trebaju biti svjesni potencijalnih opaznosti kako bi pružili najbolju skrb svojim ljubimcima.
                      </p>
                      <h5><strong>Podrška</strong></h5>
                      <p>
                       Prvo, važno je napomenuti da Cavalieri imaju izražen nagon za druženjem i potrebni su im dosta pažnje. Ako ih se zanemari ili ostavi samima predugo, mogu postati anksiozni ili razviti destruktivno ponašanje. Stoga, vlasnici trebaju provoditi dovoljno vremena sa svojim psima i pružiti im emocionalnu podršku.
                      </p>
                      
                      <p>
                        Osim toga, zdravstvene opasnosti su često prisutne kod ove pasmine. Cavalieri su skloni određenim genetskim bolestima poput srčanih problema i problema s kostima. Redoviti posjeti veterinaru i praćenje znakova bolesti ključni su za održavanje zdravlja ovih pasa.
                      </p>
                      <h5><strong>Debljina</strong></h5>
                      <p>
                        Cavalieri su skloni i pretilosti, pa vlasnici trebaju paziti na njihovu prehranu i redovitu tjelesnu aktivnost. Umjerena šetnja ili igra u dvorištu može pomoći održati zdravu tjelesnu težinu i potaknuti mentalnu stimulaciju.
                      </p>
                   
                      <p>
                        Važno je napomenuti da su ovi psi izuzetno društveni prema drugim životinjama i ljudima, pa se mogu suočiti s problemima ako nisu pravilno socijalizirani od rane dobi. Rani treninzi i pozitivno iskustvo s drugim psima i ljudima mogu pomoći u sprečavanju problema u ponašanju kasnije u životu.
                      </p>
                      <h5><strong>Uši</strong></h5>
                      <p>
                        Konačno, Cavalier King Charles španijeli često imaju osjetljive uši koje su podložne infekcijama. Redovito čišćenje ušiju pomaže u prevenciji problema, a vlasnici trebaju biti svjesni znakova infekcije, poput svrbeža ili crvenila.
                      </p>
                    </div>
                    <div class="containerI content-show">
                    <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

                    <div class="overlay radius">
                      <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                      <p class="text">Imate li više pitanja?</p>
                      <p class="text2">Nazovite nas</p>
                      <strong class="text">+385 91 28875</strong>
                    </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="tab-pane" id="tab-6">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1">
                     <div class="services-details-area">
                                           <h5><strong>OBITAVALIŠTE PSA</strong></h5>

                      <p>
                        Cavalier King Charles španijel je pasmina koja je poznata po svojoj privrženosti, ljubaznosti i prilagodljivosti. Kada su smješteni u kuću, ovi psi postaju neizostavan dio obitelji. Njihova mala veličina čini ih prikladnim za stanovanje u različitim tipovima domova, bilo da je riječ o stanu u gradu ili kući na selu.
                      </p>
                      <h5><strong>Dom</strong></h5>
                      <p>
                        Kada uređujete dom za ovu pasminu, važno je stvoriti udobno i sigurno okruženje. Oni vole imati svoje mjesto gdje se mogu povući i odmoriti, stoga je važno osigurati mekanu posteljinu i nekoliko igračaka koje će ih zabavljati. Također, pripazite na moguće opasnosti u kući, poput sitnih predmeta koje bi mogli progutati, jer su ovi psi sklona istraživanju svog okoliša.
                      </p>
                      <h5><strong>Pažnja</strong></h5>
                      <p>
                        Cavalier King Charles španijeli su društveni psi i vole biti u blizini svojih vlasnika. Stoga, važno je osigurati dovoljno vremena za igru, šetnje i pažnju. Njihova potreba za ljubavlju i pažnjom čini ih izvrsnim kućnim ljubimcima za obitelji s djecom.
                      </p>
                      <h5><strong>Dlaka</strong></h5>
                      <p>
                        Osim toga, treba paziti na redovno održavanje njihove dlake. Ova pasmina ima dugu svilenu dlaku koja zahtijeva redovitu četku kako bi se spriječilo zapetljavanje i smanjila količina mlinaca. Redovito pregledavajte uši kako biste spriječili infekcije, a također vodite brigu o njihovim noktima kako bi bili udobni tijekom šetnji.
                      </p>
                      
                      <p>
                        Uz pravilnu brigu i pažnju, Cavalier King Charles španijel će postati neizostavan član obitelji, donoseći radost i ljubav u svakodnevni život.
                      </p>
                      
                    </div>
                    <div class="containerI content-show">
                    <img class="image radius" src="../../assets/images/cavalier/puppies-waiting-for-food-J7JVTV5.jpg" alt="Image">

                    <div class="overlay radius">
                      <div class="icon2 icon bg1"><i class="ph-phone-call"></i></div>
                      <p class="text">Imate li više pitanja?</p>
                      <p class="text2">Nazovite nas</p>
                      <strong class="text">+385 91 28875</strong>
                    </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<script>
export default {
  name: "HealthGrid",
  methods: {
  openTabAndScroll(tabId) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const isTabLink = link.getAttribute('href') === `#tab-${tabId}`;

      if (!isTabLink && !link.classList.contains('main-nav-link')) {
        link.classList.remove('active', 'show');
      }
    });

    const tabLink = document.querySelector(`a[href="#tab-${tabId}"]`);

    tabLink.classList.add('active', 'show');

    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active', 'show');
    });

    const activeTabPane = document.querySelector(`#tab-${tabId}`);
    activeTabPane.classList.add('active', 'show');

    const clickEvent = new Event('click', {
      bubbles: true,
      cancelable: true,
    });
    tabLink.dispatchEvent(clickEvent);

    const nextSection = document.querySelector('#features');
    const h2Element = nextSection.querySelector('h2');
    h2Element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

};
</script>

<style>
@import '~boxicons/css/animations.css';
@import '~boxicons/css/boxicons.css';
@import '~boxicons/css/boxicons.min.css';
@import '~boxicons/css/transformations.css';


</style>
