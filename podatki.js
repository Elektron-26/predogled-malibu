/* PREDOGLED · Okrepčevalnica in picerija Malibu, Kapca
   Viri (4.11.2026): Google Maps (fotografije, delovni čas, ocena 4,6 / 1.487, mnenje), visitpomurje.eu,
   sesezogica.si, fotografije jedilnika (pice, solate). Cene preverimo z gostilno. */
const G = "https://lh3.googleusercontent.com/";
const F = {
  notranjost: G+"grass-cs/AABkmLccfe_-6im35n2FY9pZGEnEcEGa7Qm94mqM-3KINBFIc7nhTmeeKRspB41S0JNYCE_rZl0BLQn31L4yLH6mNwDWy8P3JdhkcOoc4u_7xwnaRbf3XxJqDmA9SwP9p9SMZwRqvZiEbw=w1600",
  zar: G+"grass-cs/AABkmLcWA0nuIswcb8yIRi2HHVbiyiY5JBhYaFBjayCCVQKfdJYxRP65JiwR48tIbzUhdn3k6tyyCguhZp9STX-PA_dY5a4ozfB2K4r5L9jiszDt-oMwFp5FaIeKLiCu3p2ZG56NqR1RfA=w1200",
  zunaj: G+"gps-cs-s/ANWiy9TF0HHigOyi7m8i_7ebWTRaWhy73TYe70nJ1euSmpuGz8f70HulGOeuZbxISysjuuhiGJHj7POCYflw4SKCyI2feqTIW4pzygozuzIJUnc-KvdFxYtnnrLxpudO3YrniOLW8Kt4im-uUwK-=w1600",
  picaTerasa: G+"gps-cs-s/ANWiy9Qo6ehYr8RP9jMozcKUF2HOHkrtK02anKZowO4dSesic3IGTJI2etz703-SesI4Py1PrYISy5by4_GuTwgkmTCA504Qk6_ENtIX7pU2T6S953O-eQSc5gzK8JI4XBJs-Wgn_CN2=w1200",
  terasaRibnik: G+"gps-cs-s/ANWiy9TvssppSEcL9L8Y0OtAvLMjA7RpZS4zV9zKwXequonq8YO4PJC14-qLteen8Oawm7jsrr7vz_23Tr039n1f40qbh4uD0erTt6FFxUdN0jZbg6W-kRapF_ULJhXspv0oiEQmLGS2XjXkz5_J=w1800",
  pica: G+"gps-cs-s/ANWiy9TOLstcWkJhaMRp8dEexKAQyt93T00XjyqZqNRAARIgitXCGn0wPxwoWkK2QWtaIOoXEVXC3zDs-PbDtO4QvKdazQnb5EFUT6YqsY_ka1bnD9LxDCbIUCaQyCITYO1dAqUjFlKQ=w1200",
  steak: G+"gps-cs-s/ANWiy9TyEhluCBJJD5jIEi_VsfZOq5rniyt7B883efrfEfKujX2SkasxmTLywZVjWv_IE-XSt43rnnsYHsbMnxPlsPr_YX4zaAW-U4N0IV3SKtDZsV77sm1JtO3TmRoYNdj7AUcpjnONTA=w1200",
  juha: G+"gps-cs-s/ANWiy9TeNwp7mIPO2jVsGadxi6f-43bXxJIuAQv5hnJR1qcwHUmhQawrZnDGMpHDWfLAopVEmLZ7egW_LzUUgT9KmcW75XyqhTHcOHtS4AJI12g-4pKDCjNBmttVSSV9rV7a1z4gIxCPt5-Ex0M=w1200",
  zrezek: G+"gps-cs-s/ANWiy9S2W0HDiULSLc2jvwzCUjQ2l9ZVdDJHmKqsiv-p2EfANPpBJVknRKdOpYnQAPzdoTMco9eHnuspizL-PJha4nGNWzXrRptJAG8SAfIqy5igc7GAENHqFXBDlC4ZR7UcMjEp3PK5ZuDQNZk=w1200",
  terasaMiza: G+"gps-cs-s/ANWiy9RNwqpl7HeS26gbYDYPkbY0tcSUWQxZ6gqFBsTOWXWYouEQqkXg3wmEEwkmKCWE_YmgUmiAORwL21mFBG5x6HUsAu5vYeAeyGhrdYSqKo773GKMSCEw6Yq18gCAIVO0i_Zm9NIBTxoBex8=w1200",
  noc: G+"gps-cs-s/ANWiy9Q5iQlw7lRMum2jhRy_BT6o6tBNzzR6F70zqvwB3F4rBscCL4mP4cWLOqYqcBJh7x9wsbJXI81CN3eJO4hbbFrWiNSXp7INzQbCXwPuMIfDp31KLTefED_OZhRchYdHcY027xZx=w1200",
  lok: G+"gps-cs-s/ANWiy9Qlo1A4qCCIlIcVpl2sJ0jg76MZxdi0OP7UhgAuh7wfvA7hJeU1pxio6dZlMD-QdOs0ffsROAYdyQgIOG8tSH6LyYQcXM4zAGgpuZvBseW5MHvrcbB1VLGq4wHb5yI7oY5kujK9=w1600",
  vrt: G+"grass-cs/AABkmLdUAX5E_ovV1pe679xyYqKUpnZ0_C719ywdTwMgLLk2codcuOqF41HMz20cuC1zhRuhVdlmMLuNj6yLtJGRIJgjASH6ID3cXQCX-1SZatbfLSlxGkN_d4H5vG0vpaLZYX5hC7Z6vg=w1800"
};

const CONFIG = {
  ime: "Malibu",
  kraj: "Kapca",
  naslov: "Pice, žar in domača kuhinja *ob ribniku*.",
  opis: "Gostilna in picerija v Kapci pri Lendavi. Za hišo dva ribnika, ob terasi ograda z jeleni in zajčki, v kuhinji bograč, dunajski zrezek in pice iz naše peči.",

  barve: { poudarek: "#B4482A", temna: "#203A2F" },

  slike: {
    hero: F.terasaRibnik, heroOpis: "Terasa z ribnikom",
    hero2: F.picaTerasa, hero2Opis: "Pica na terasi",
    heroNapis: "Pogled s terase na ribnik.",
    zgodba1: F.notranjost, zgodba2: F.terasaMiza,
    onas: F.zunaj,
    praznovanja: F.lok,
    galerija: [F.terasaRibnik, F.notranjost, F.pica, F.steak, F.zar, F.juha, F.zrezek, F.noc, F.lok, F.terasaMiza, F.picaTerasa, F.vrt]
  },

  kontakt: {
    telefon: "02 578 12 75",
    email: "zvezda.beltinci@siol.net",
    naslov: "Glavna ulica 15, 9220 Kapca",
    facebook: "https://www.facebook.com/p/Malibu-Kapca-100076500120487/",
    instagram: ""
  },

  // vir: Google Maps (4.11.2026)
  delovniCas: ["08:00-24:00", "08:00-24:00", "08:00-24:00", "08:00-24:00", "08:00-01:00", "08:00-01:00", "09:00-24:00"],
  opombaCas: "Za zaključene družbe tudi po dogovoru.",

  trak: ["Prekmurski bograč", "Dunajski zrezek", "Pica Šefova", "Dalmatinski meč", "Solata Argentina", "Pica Bograč", "Prekmurska gibanica", "Kremni sladoled"],

  izborNaslov: "Kar gostje *naročajo* najpogosteje",
  jedilnik: [
    { kategorija: "Pice", jedi: [
      { ime: "Na bregu", opis: "pelati, šunka, sir, suha salama, čebula, gobice", cena: "9,50 €" },
      { ime: "Bograč", opis: "pica z bogračem, sir, pekoča pasta", cena: "15,00 €", znacka: "Posebnost", izbor: true },
      { ime: "Vražja", opis: "pelati, pikantna salama, sir, čebula, nacho, feferoni", cena: "9,20 €" },
      { ime: "Šefova", opis: "pelati, sir, slanina, pikantna salama, čebula, nacho, feferoni", cena: "9,50 €", izbor: true },
      { ime: "Lacijeva", opis: "pelati, narezana šunka, sir, feferoni, česen, čebula", cena: "9,00 €" },
      { ime: "Tuna", opis: "pelati, tuna, sir, koruza", cena: "8,50 €" },
      { ime: "Morska", opis: "pelati, sir, morski sadeži, tržaška omaka, olive", cena: "10,00 €" },
      { ime: "Rakec", opis: "pelati, rakci, sir, olive, tržaška omaka", cena: "10,00 €" },
      { ime: "Sardela", opis: "pelati, sir, sardele, tržaška omaka, olive", cena: "10,00 €" },
      { ime: "Po želji", opis: "iz naših sestavin, po vaših željah", cena: "12,00 €" }
    ]},
    { kategorija: "Z žara in glavne jedi", jedi: [
      { ime: "Dunajski zrezek s pomfrijem", opis: "med gosti najbolj priljubljena jed", cena: "", znacka: "Priljubljeno", izbor: true },
      { ime: "Dalmatinski meč", opis: "mešano meso z žara", cena: "", znacka: "Priljubljeno", izbor: true },
      { ime: "Biftek", opis: "s prilogo", cena: "" },
      { ime: "Mešano meso z žara", opis: "z zelenjavo z žara", cena: "" },
      { ime: "Ocvrt sir", opis: "s prilogo po izbiri", cena: "" }
    ]},
    { kategorija: "Prekmurske jedi", jedi: [
      { ime: "Prekmurski bograč", opis: "po domačem receptu", cena: "", znacka: "Domače" },
      { ime: "Prekmurska gibanica", opis: "", cena: "", znacka: "Domače" }
    ]},
    { kategorija: "Solate", jedi: [
      { ime: "Solata Argentina", opis: "mešanica listnatih solat, parmezan, mini papričice, pečene bučke, gorčični preliv, semena, krutoni, goveji steak", cena: "14,70 €", izbor: true },
      { ime: "Kraljeva solata", opis: "listnata solata, češnjev paradižnik, piščančji trakovi po dunajsko, mocarela", cena: "11,80 €" },
      { ime: "Solata z gamberi", opis: "listnata solata, jajce, ocvrti gamberi, češnjev paradižnik, mocarela", cena: "12,60 €" },
      { ime: "Motovilec s panceto", opis: "motovilec, panceta, šampinjoni, kuhano jajce", cena: "12,60 €" },
      { ime: "Solata kebab", opis: "zelena solata, zelje, kumare, paradižnik, čebula, kebab meso, kebab omaka", cena: "11,80 €" },
      { ime: "Šopska solata", opis: "kumare, paradižnik, čebula, paprika, feta sir", cena: "6,50 €" }
    ]}
  ],
  jezik: null,
  jeziki: ["SLO", "ENG", "DEU", "MAG"],
  jedilnikUvod: "Pice, jedi z žara, prekmurske jedi in solate. Jedilnik je v slovenščini, angleščini, nemščini in madžarščini.",
  jedilnikOpomba: "Predogled: jedi in cene so prepisane s fotografij jedilnika, objavljenih na spletu. Preden stran objavimo, jih uskladimo z vašim trenutnim jedilnikom. Alergeni so označeni na jedilniku v gostilni.",
  sSeboj: true,

  onas: {
    oznaka: "Pri nas",
    naslov: "Kosilo, ki se spremeni v *izlet*.",
    podnaslov: "Gostilna in picerija v Kapci, kamor pridejo družine, prijatelji in večje družbe.",
    besedilo: [
      "Malibu je gostilna ob glavni cesti v Kapci, nekaj minut iz Lendave. Kuhamo domače jedi, pečemo pice in pripravljamo jedi z žara, porcije pa so takšne, da nihče ne odide lačen.",
      "Za hišo sta dva ribnika, ob terasi pa velika ograda z jeleni, zajčki in drugimi živalmi. Poleti se na mivki igra odbojka, na pokriti terasi pa se posedi ob sladoledu in kozarcu lendavskega vina.",
      "Za večje družbe imamo prostor v notranjosti lokala, na terasi in v ribiški koči na dvorišču."
    ],
    dozivetjaNaslov: "Več kot *kosilo*",
    dozivetja: [
      { naslov: "Ograda z živalmi", opis: "Jeleni, zajčki in druge živali tik ob terasi." },
      { naslov: "Dva ribnika", opis: "Za gostilno, z ribiško kočo na dvorišču." },
      { naslov: "Odbojka in nogomet", opis: "Igrišče na mivki in prostor za nogomet." },
      { naslov: "Pokrita terasa", opis: "S pogledom na ribnik, za sončne in deževne dni." },
      { naslov: "Veliko parkirišče", opis: "Ob gostilni, tudi za avtobuse." },
      { naslov: "Vsak dan odprto", opis: "Od jutra do polnoči, ob petkih in sobotah do enih." }
    ]
  },

  praznovanja: {
    naslov: "Praznujte *pri nas*",
    uvod: "Rojstni dnevi, obhajila, obletnice in druženja. Pripravimo meni po vaši meri, otroci pa se medtem zabavajo ob živalih.",
    prostori: [
      { ime: "Notranjost lokala", kapaciteta: "Večje družbe", opis: "Za praznovanja ob vsakem vremenu." },
      { ime: "Ribiška koča", kapaciteta: "Zaključene družbe", opis: "Na dvorišču ob ribnikih, kot nalašč za piknik ali rojstni dan." },
      { ime: "Pokrita terasa", kapaciteta: "Od pomladi do jeseni", opis: "S pogledom na ribnik in ogrado z živalmi." }
    ],
    priloznosti: ["Rojstni dan", "Otroški rojstni dan", "Obhajilo ali birma", "Obletnica", "Druženje z ribolovom", "Poslovno srečanje", "Drugo"],
    meniji: []
  },

  pas: {
    slika: F.vrt, opis: "Vrt",
    naslov: "Miza je pogrnjena *za vaše praznovanje*.",
    besedilo: "Rojstni dan, obhajilo ali druženje z ribolovom. Pripravimo meni po vaši meri, otroci pa se medtem zabavajo ob jelenih in zajčkih.",
    povezava: { ime: "Praznovanja", url: "praznovanja.html" }
  },

  rezervacija: true,

  // resnična mnenja z Googla (prepisana, skrajšana)
  ocene: [
    { besedilo: "Lepa restavracija z res lepo okolico. Poleg dobrih jedi priporočam prekmurski bograč in prekmursko gibanico. Prijazno osebje nas je hitro postreglo, kljub polnem gostišču.", avtor: "Milan Savšek", vir: "Google" }
  ],
  ocenaSkupaj: { zvezdice: "4,6", stevilo: "1.487", vir: "Google" },

  zemljevid: "Okrepčevalnica in pizzerija Malibu, Glavna ulica 15, Kapca",

  predogled: true
};
