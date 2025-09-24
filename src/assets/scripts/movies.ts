type MovieData = {
    year: number,
    review: number,
    genre: string[],
    poster: string,
    posterFull: string,
    length: number,
    url: string
}

export const movies = {
  "28 dní poté": {
    year: 2002,
    review: 72,
    genre: ["horor", "sci-fi", "thriller"],
    poster: "/posters/28_dni_pote.jpg",
    posterFull: "/posters/28_dni_pote_full.jpg",
    length: 108,
    url: "28 dní poté (2002) CZ.mp4"
  },
  "28 let poté": {
    year: 2025,
    review: 67,
    genre: ["horor", "sci-fi", "thriller"],
    poster: "/posters/28_let_pote.jpg",
    posterFull: "/posters/28_let_pote_full.jpg",
    length: 115,
    url: "28 let poté (2025) CZ.mkv"
  },
  "33 životů": {
    year: 2015,
    review: 67,
    genre: ["drama", "životopisný", "historický", "katastrofický"],
    poster: "/posters/33_zivotu.jpg",
    posterFull: "/posters/33_zivotu_full.jpg",
    length: 127,
    url: "33 životů (2015) CZ.mkv"
  },
  "40 let panic": {
    year: 2005,
    review: 63,
    genre: ["komedie", "romantický"],
    poster: "/posters/40_let_panic.jpg",
    posterFull: "/posters/40_let_panic_full.jpg",
    length: 111,
    url: "40 let panic (2005) CZ.mkv"
  },
  "610 metrů nad zemí": {
    year: 2022,
    review: 68,
    genre: ["thriller"],
    poster: "/posters/610_metru_nad_zemi.jpg",
    posterFull: "/posters/610_metru_nad_zemi_full.jpg",
    length: 107,
    url: "610 metrů nad zemí (2022) CZ.mkv"
  },
  "Agent bez minulosti": {
    year: 2002,
    review: 85,
    genre: ["akční", "mysteriózní", "thriller"],
    poster: "/posters/agent_bez_minulosti.jpg",
    posterFull: "/posters/agent_bez_minulosti_full.jpg",
    length: 119,
    url: "Agent bez minulosti (2002) CZ.mkv"
  },
  "Andělé démoni": {
    year: 2009,
    review: 68,
    genre: ["mysteriózní", "thriller"],
    poster: "/posters/andele_a_demoni.jpg",
    posterFull: "/posters/andele_a_demoni_full.jpg",
    length: 133,
    url: "Andělé démoni (2009) CZ.mkv"
  },
  "Atlas": {
    year: 2024,
    review: 55,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/atlas.jpg",
    posterFull: "/posters/atlas_full.jpg",
    length: 118,
    url: "Atlas (2024) CZ.mkv"
  },
  "Auta": {
    year: 2006,
    review: 83,
    genre: ["animovaný", "komedie", "rodinný", "sportovní"],
    poster: "/posters/auta.jpg",
    posterFull: "/posters/auta_full.jpg",
    length: 116,
    url: "Auta (2006) CZ.mkv"
  },
  "Avengers 3 - Infinity War": {
    year: 2018,
    review: 86,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/avengers_3_infinity_war.jpg",
    posterFull: "/posters/avengers_3_infinity_war_full.jpg",
    length: 149,
    url: "Avengers 3 - Infinity War (2018) CZ.mkv"
  },
  "Avengers 4 - Endgame": {
    year: 2019,
    review: 84,
    genre: ["akční", "dobrodružný", "sci-fi", "fantasy"],
    poster: "/posters/avengers_4_endgame.jpg",
    posterFull: "/posters/avengers_4_endgame_full.jpg",
    length: 182,
    url: "Avengers 4 - Endgame (2019) CZ.mp4"
  },
  "Balerina": {
    year: 2025,
    review: 71,
    genre: ["akční", "thriller"],
    poster: "/posters/balerina.jpg",
    posterFull: "/posters/balerina_full.jpg",
    length: 125,
    url: "mb://192.168.0.1/G/Filmy/Balerina (2025) CZ tit.mkv"
  },
  "Batman": {
    year: 2022,
    review: 79,
    genre: ["akční", "drama", "krimi", "mysteriózní"],
    poster: "/posters/batman.jpg",
    posterFull: "/posters/batman_full.jpg",
    length: 176,
    url: "Batman (2022) CZ.mkv"
  },
  "Batman začíná": {
    year: 2005,
    review: 87,
    genre: ["akční", "dobrodružný"],
    poster: "/posters/batman_zacina.jpg",
    posterFull: "/posters/batman_zacina_full.jpg",
    length: 140,
    url: "Batman začíná (2005) CZ.mkv"
  },
  "Birds of Prey - Podivuhodná proměnna Harley Quinn": {
    year: 2020,
    review: 55,
    genre: ["akční", "dobrodružný", "krimi", "komedie"],
    poster: "/posters/bird_of_prey.jpg",
    posterFull: "/posters/bird_of_prey_full.jpg",
    length: 109,
    url: "Birds of Prey - Podivuhodná proměnna Harley Quinn (2020) CZ.avi"
  },
  "Black Widow": {
    year: 2021,
    review: 61,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/black_widow.jpg",
    posterFull: "/posters/black_widow_full.jpg",
    length: 134,
    url: "Black Widow (2021) CZ.mkv"
  },
  "Blade Runner 2049": {
    year: 2017,
    review: 75,
    genre: ["sci-fi", "mysteriózní", "thriller", "drama"],
    poster: "/posters/blade_runner_2049.jpg",
    posterFull: "/posters/blade_runner_2049_full.jpg",
    length: 164,
    url: "Blade Runner 2049 (2017) CZ.avi"
  },
  "Bourneovo ultimátum": {
    year: 2007,
    review: 87,
    genre: ["akční", "thriller"],
    poster: "/posters/bourneovo_ultimatum.jpg",
    posterFull: "/posters/bourneovo_ultimatum_full.jpg",
    length: 115,
    url: "Bourneovo ultimátum (2007) CZ.mkv"
  },
  "Bournův mýtus": {
    year: 2004,
    review: 86,
    genre: ["akční", "thriller"],
    poster: "/posters/bournuv_mytus.jpg",
    posterFull: "/posters/bournuv_mytus_full.jpg",
    length: 108,
    url: "Bournův mýtus (2004) CZ.mkv"
  },
  "Captain America - Návrat prvního Avengera": {
    year: 2014,
    review: 78,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/captain_america_navrat_prvniho_avengera.jpg",
    posterFull: "/posters/captain_america_navrat_prvniho_avengera_full.jpg",
    length: 136,
    url: "Captain America - Návrat prvního Avengera (2014) CZ.mp4"
  },
  "Captain America - Nový svět": {
    year: 2025,
    review: 47,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/captain_america_novy_svet.jpg",
    posterFull: "/posters/captain_america_novy_svet_full.jpg",
    length: 118,
    url: "Captain America - Nový svět (2025) CZ.mp4"
  },
  "Captain America - Občanská válka": {
    year: 2016,
    review: 78,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/captain_america_obcanska_valka.jpg",
    posterFull: "/posters/captain_america_obcanska_valka_full.jpg",
    length: 147,
    url: "Captain America - Občanská válka (2016) CZ.mp4"
  },
  "Captain America - První Avenger": {
    year: 2011,
    review: 69,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/captain_america_prvni_avenger.jpg",
    posterFull: "/posters/captain_america_prvni_avenger_full.jpg",
    length: 119,
    url: "Captain America - První Avenger (2011) CZ.mkv"
  },
  "Captain Marvel": {
    year: 2019,
    review: 68,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/captain_marvel.jpg",
    posterFull: "/posters/captain_marvel_full.jpg",
    length: 124,
    url: "Captain Marvel (2019) CZ.mp4"
  },
  "Čarodějův učeň": {
    year: 2010,
    review: 61,
    genre: ["akční", "dobrodružný", "drama", "fantasy"],
    poster: "/posters/carodejuv_ucen.jpg",
    posterFull: "/posters/carodejuv_ucen_full.jpg",
    length: 105,
    url: "Čarodějův učeň (2010) CZ.mkv"
  },
  "Černí baroni": {
    year: 1993,
    review: 83,
    genre: ["komedie"],
    poster: "/posters/cerni_baroni.jpg",
    posterFull: "/posters/cerni_baroni_full.jpg",
    length: 99,
    url: "Černí baroni (1993) CZ.mkv"
  },
  "Červený drak": {
    year: 2002,
    review: 75,
    genre: ["krimi", "thriller", "drama", "horor"],
    poster: "/posters/cerveny_drak.jpg",
    posterFull: "/posters/cerveny_drak_full.jpg",
    length: 118,
    url: "Červený drak (2002) CZ.mkv"
  },
  "Chraň nás od zlého": {
    year: 2014,
    review: 72,
    genre: ["mysteriózní", "horor", "thriller"],
    poster: "/posters/chran_nas_od_zleho.jpg",
    posterFull: "/posters/chran_nas_od_zleho_full.jpg",
    length: 118,
    url: "Chraň nás od zlého (2014) CZ.mkv"
  },
  "Constantine": {
    year: 2005,
    review: 81,
    genre: ["fantasy", "mysteriózní", "thriller", "horor"],
    poster: "/posters/constantine.jpg",
    posterFull: "/posters/constantine_full.jpg",
    length: 115,
    url: "Constantine (2005) CZ.mkv"
  },
  "Deník Bridget Jones": {
    year: 2001,
    review: 77,
    genre: ["komedie", "romantický"],
    poster: "/posters/denik_bridget_jonesove.jpg",
    posterFull: "/posters/denik_bridget_jonesove_full.jpg",
    length: 97,
    url: "Deník Bridget Jones (2001) CZ.mkv"
  },
  "Divergence": {
    year: 2014,
    review: 65,
    genre: ["sci-fi", "dobrodružný", "thriller"],
    poster: "/posters/divergence.jpg",
    posterFull: "/posters/divergence_full.jpg",
    length: 139,
    url: "Divergence (2014) CZ.mkv"
  },
  "Divergence 2 - Rezistence": {
    year: 2015,
    review: 58,
    genre: ["sci-fi", "dobrodružný", "thriller"],
    poster: "/posters/divergence_2_rezistence.jpg",
    posterFull: "/posters/divergence_2_rezistence_full.jpg",
    length: 119,
    url: "Divergence 2 - Rezistence (2015) CZ.mov"
  },
  "Divergence 3 - Aliance": {
    year: 2016,
    review: 55,
    genre: ["dobrodružný", "romantický", "sci-fi", "akční"],
    poster: "/posters/divergence_3_aliance.jpg",
    posterFull: "/posters/divergence_3_aliance_full.jpg",
    length: 120,
    url: "Divergence 3 - Aliance (2016) CZ.mov"
  },
  "Doba Ledová": {
    year: 2002,
    review: 84,
    genre: ["animovaný", "dobrodružný", "komedie", "rodinný"],
    poster: "/posters/doba_ledova.jpg",
    posterFull: "/posters/doba_ledova_full.jpg",
    length: 78,
    url: "Doba Ledová (2002) CZ.mkv"
  },
  "Dobrodružství Žraločáka a Lávovky": {
    year: 2005,
    review: 21,
    genre: ["akční", "dobrodružný", "rodinný", "fantasy"],
    poster: "/posters/dobrodruzstvi_zralocaka_a_lavovky.jpg",
    posterFull: "/posters/dobrodruzstvi_zralocaka_a_lavovky_full.jpg",
    length: 93,
    url: "Dobrodružství Žraločáka a Lávovky (2005) CZ.avi"
  },
  "Doctor Strange": {
    year: 2016,
    review: 77,
    genre: ["akční", "dobrodružný", "fantasy", "sci-fi"],
    poster: "/posters/doctor_strange.jpg",
    posterFull: "/posters/doctor_strange_full.jpg",
    length: 115,
    url: "Doctor Strange (2016) CZ.mkv"
  },
  "Elio": {
    year: 2025,
    review: 66,
    genre: ["animovaný", "dobrodružný", "komedie"],
    poster: "/posters/elio.jpg",
    posterFull: "/posters/elio_full.jpg",
    length: 98,
    url: "Elio (2025) CZ.mkv"
  },
  "F1 The Movie": {
    year: 2025,
    review: 83,
    genre: ["sportovní", "drama"],
    poster: "/posters/f1_the_movie.png",
    posterFull: "/posters/f1_the_movie_full.png",
    length: 155,
    url: "F1 The Movie (2025) CZ tit.mkv"
  },
  "Fantastická zvířata - Brumbálova tajemství": {
    year: 2022,
    review: 55,
    genre: ["dobrodružný", "rodinný", "fantasy"],
    poster: "/posters/fantasticka_zvirata_brumbalova_tajemstvi.jpg",
    posterFull: "/posters/fantasticka_zvirata_brumbalova_tajemstvi_full.jpg",
    length: 143,
    url: "Fantastická zvířata - Brumbálova tajemství (2022) CZ.mkv"
  },
  "Fantastická zvířata - Grindelwaldovy zločiny": {
    year: 2018,
    review: 63,
    genre: ["dobrodružný", "rodinný", "fantasy"],
    poster: "/posters/fantasticka_zvirata_grindelwaldovy_zlociny.jpg",
    posterFull: "/posters/fantasticka_zvirata_grindelwaldovy_zlociny_full.jpg",
    length: 134,
    url: "Fantastická zvířata - Grindelwaldovy zločiny (2018) CZ.mkv"
  },
  "Fantastická zvířata a kde je najít": {
    year: 2016,
    review: 72,
    genre: ["dobrodružný", "rodinný", "fantasy"],
    poster: "/posters/fantasticka_zvirata_a_kde_je_najit.jpg",
    posterFull: "/posters/fantasticka_zvirata_a_kde_je_najit_full.jpg",
    length: 133,
    url: "Fantastická zvířata a kde je najít (2016) CZ.mkv"
  },
  "Faunův labyrint": {
    year: 2006,
    review: 81,
    genre: ["fantasy", "válečný", "drama"],
    poster: "/posters/faunuv_labyrint.jpg",
    posterFull: "/posters/faunuv_labyrint_full.jpg",
    length: 118,
    url: "Faunův labyrint (2006) CZ.mkv"
  },
  "Fear Below": {
    year: 2025,
    review: 53,
    genre: ["akční", "dobrodružný", "horor"],
    poster: "/posters/fear_below.jpg",
    posterFull: "/posters/fear_below_full.jpg",
    length: 85,
    url: "Fear Below (2025) CZ tit.mkv"
  },
  "Nezvratný osud - Pokrevní linie": {
    year: 2025,
    review: 68,
    genre: ["horor"],
    poster: "/posters/nezvratny_osud_pokrevni_linie.jpg",
    posterFull: "/posters/nezvratny_osud_pokrevni_linie_full.jpg",
    length: 109,
    url: "Nezvratný osud - Pokrevní linie (2025) CZ.mkv"
  },
  "Gentlemani": {
    year: 2019,
    review: 86,
    genre: ["akční", "komedie", "krimi"],
    poster: "/posters/gentlemani.jpg",
    posterFull: "/posters/gentlemani_full.jpg",
    length: 113,
    url: "Gentlemani (2019) CZ.avi"
  },
  "Ghost Rider": {
    year: 2007,
    review: 52,
    genre: ["akční", "thriller", "fantasy"],
    poster: "/posters/ghost_rider.jpg",
    posterFull: "/posters/ghost_rider_full.jpg",
    length: 105,
    url: "Ghost Rider (2007) CZ.mkv"
  },
  "Ghost Rider 2": {
    year: 2011,
    review: 32,
    genre: ["akční", "thriller", "fantasy"],
    poster: "/posters/ghost_rider_2.jpg",
    posterFull: "/posters/ghost_rider_2.jpg",
    length: 95,
    url: "Ghost Rider 2 (2011) CZ.mkv"
  },
  "Hacker": {
    year: 2015,
    review: 53,
    genre: ["mysteriózní", "krimi", "thriller", "drama"],
    poster: "/posters/hacker.jpg",
    posterFull: "/posters/hacker_full.jpg",
    length: 133,
    url: "Hacker (2015) CZ.mkv"
  },
  "Harry Potter a Fénixův řád": {
    year: 2007,
    review: 80,
    genre: ["fantasy", "rodinný", "dobrodružný", "drama"],
    poster: "/posters/harry_potter_5.jpg",
    posterFull: "/posters/harry_potter_5_full.jpg",
    length: 138,
    url: "Harry Potter a Fénixův řád (2007) CZ.mkv"
  },
  "Harry Potter a Kámen mudrců": {
    year: 2001,
    review: 80,
    genre: ["fantasy", "rodinný", "dobrodružný", "mysteriózní"],
    poster: "/posters/harry_potter_1.jpg",
    posterFull: "/posters/harry_potter_1_full.jpg",
    length: 152,
    url: "Harry Potter a Kámen mudrců (2001) CZ.mkv"
  },
  "Harry Potter a Ohnivý pohár": {
    year: 2005,
    review: 79,
    genre: ["fantasy", "rodinný", "dobrodružný", "drama"],
    poster: "/posters/harry_potter_4.jpg",
    posterFull: "/posters/harry_potter_4_full.jpg",
    length: 157,
    url: "Harry Potter a Ohnivý pohár (2005) CZ.mkv"
  },
  "Harry Potter a Princ dvojí krve": {
    year: 2009,
    review: 77,
    genre: ["dobrodružný", "fantasy", "mysteriózní", "rodinný"],
    poster: "/posters/harry_potter_6.jpg",
    posterFull: "/posters/harry_potter_6_full.jpg",
    length: 147,
    url: "Harry Potter a Princ dvojí krve (2009) CZ.mkv"
  },
  "Harry Potter a Relikvie smrti - část druhá": {
    year: 2011,
    review: 83,
    genre: ["dobrodružný", "drama", "rodinný", "fantasy"],
    poster: "/posters/harry_potter_7_2_cast.jpg",
    posterFull: "/posters/harry_potter_7_2_cast_full.jpg",
    length: 125,
    url: "Harry Potter a Relikvie smrti - část druhá (2011) CZ.mkv"
  },
  "Harry Potter a Relikvie smrti - část první": {
    year: 2010,
    review: 75,
    genre: ["dobrodružný", "drama", "rodinný", "fantasy"],
    poster: "/posters/harry_potter_7_1_cast.jpg",
    posterFull: "/posters/harry_potter_7_1_cast_full.jpg",
    length: 140,
    url: "Harry Potter a Relikvie smrti - část první (2010) CZ.mkv"
  },
  "Harry Potter a Tajemná komnata": {
    year: 2002,
    review: 78,
    genre: ["fantasy", "rodinný", "dobrodružný", "mysteriózní"],
    poster: "/posters/harry_potter_2.jpg",
    posterFull: "/posters/harry_potter_2_full.jpg",
    length: 161,
    url: "Harry Potter a Tajemná komnata (2002) CZ.mkv"
  },
  "Harry Potter a Vězeň z Azkabanu": {
    year: 2004,
    review: 86,
    genre: ["fantasy", "rodinný", "dobrodružný", "mysteriózní"],
    poster: "/posters/harry_potter_3.jpg",
    posterFull: "/posters/harry_potter_3_full.jpg",
    length: 141,
    url: "Harry Potter a Vězeň z Azkabanu (2004) CZ.mkv"
  },
  "Hell of a Summer": {
    year: 2023,
    review: 40,
    genre: ["komedie", "horor"],
    poster: "/posters/hell_of_summer.jpg",
    posterFull: "/posters/hell_of_summer_full.jpg",
    length: 88,
    url: "Hell of a Summer (2023) CZ tit.mkv"
  },
  "Hellboy - Křivák": {
    year: 2024,
    review: 37,
    genre: ["akční", "fantasy", "horor"],
    poster: "/posters/hellboy_krivak.jpg",
    posterFull: "/posters/hellboy_krivak_full.jpg",
    length: 99,
    url: "Hellboy - Křivák (2024) CZ.mkv"
  },
  "Heretic": {
    year: 2024,
    review: 72,
    genre: ["horor", "thriller"],
    poster: "/posters/heretic.jpg",
    posterFull: "/posters/heretic_full.jpg",
    length: 111,
    url: "Heretic (2024) CZ.mkv"
  },
  "Hitman": {
    year: 2007,
    review: 61,
    genre: ["akční", "krimi", "drama", "thriller"],
    poster: "/posters/hitman.jpg",
    posterFull: "/posters/hitman_full.jpg",
    length: 89,
    url: "Hitman (2007) CZ.mkv"
  },
  "Hlavy státu": {
    year: 2025,
    review: 65,
    genre: ["akční", "thriller", "komedie"],
    poster: "/posters/hlavy_statu.png",
    posterFull: "/posters/hlavy_statu_full.png",
    length: 116,
    url: "Hlavy státu (2025) CZ.mkv"
  },
  "Hledá se Nemo": {
    year: 2003,
    review: 86,
    genre: ["animovaný", "dobrodružný", "komedie", "rodinný"],
    poster: "/posters/hleda_se_nemo.jpg",
    posterFull: "/posters/hleda_se_nemo_full.jpg",
    length: 100,
    url: "Hledá se Nemo (2003) CZ.mkv"
  },
  "Hobit - Bitva pěti armád": {
    year: 2014,
    review: 75,
    genre: ["dobrodružný", "fantasy"],
    poster: "/posters/hobit_bitva_peti_armad.jpg",
    posterFull: "/posters/hobit_bitva_peti_armad_full.jpg",
    length: 144,
    url: "Hobit - Bitva pěti armád (2014) CZ.mkv"
  },
  "Hobit - Neočekávaná cesta": {
    year: 2012,
    review: 81,
    genre: ["dobrodružný", "fantasy"],
    poster: "/posters/hobit_neocekavana_cesta.jpg",
    posterFull: "/posters/hobit_neocekavana_cesta_full.jpg",
    length: 169,
    url: "Hobit - Neočekávaná cesta (2012) CZ.mkv"
  },
  "Hobit - Šmakova dračí poušť": {
    year: 2013,
    review: 80,
    genre: ["dobrodružný", "fantasy"],
    poster: "/posters/hobit_smakova_draci_poust.jpg",
    posterFull: "/posters/hobit_smakova_draci_poust_full.jpg",
    length: 161,
    url: "Hobit - Šmakova dračí poušť (2013) CZ.mkv"
  },
  "Hon na čarodějnice": {
    year: 2011,
    review: 58,
    genre: ["dobrodružný", "akční", "fantasy"],
    poster: "/posters/hon_na_carodejnice.png",
    posterFull: "/posters/hon_na_carodejnice_full.png",
    length: 95,
    url: "Hon na čarodějnice (2011) CZ.mkv"
  },
  "Inferno": {
    year: 2016,
    review: 59,
    genre: ["akční", "dobrodružný", "krimi", "drama", "mysteriózní", "thriller"],
    poster: "/posters/inferno.jpg",
    posterFull: "/posters/inferno_full.jpg",
    length: 121,
    url: "Inferno (2016) CZ.mkv"
  },
  "Iron Man": {
    year: 2008,
    review: 82,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/iron_man.jpg",
    posterFull: "/posters/iron_man_full.jpg",
    length: 126,
    url: "Iron Man (2008) CZ.mkv"
  },
  "Iron Man 2": {
    year: 2010,
    review: 73,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/iron_man_2.jpg",
    posterFull: "/posters/iron_man_2_full.jpg",
    length: 119,
    url: "Iron Man 2 (2010) CZ.mp4"
  },
  "Iron Man 3": {
    year: 2013,
    review: 80,
    genre: ["sci-fi", "fantasy", "akční", "dobrodružný"],
    poster: "/posters/iron_man_3.jpg",
    posterFull: "/posters/iron_man_3_full.jpg",
    length: 130,
    url: "Iron Man 3 (2013) CZ.mp4"
  },
  "Já legenda - alternativní konec": {
    year: 2007,
    review: 78,
    genre: ["drama", "sci-fi", "thriller", "horor"],
    poster: "/posters/ja_legenda.jpg",
    posterFull: "/posters/ja_legenda_full.jpg",
    length: 101,
    url: "Já legenda - alternativní konec (2007) CZ.mkv"
  },
  "Já robot": {
    year: 2004,
    review: 82,
    genre: ["sci-fi", "akční", "krimi", "drama", "mysteriózní"],
    poster: "/posters/ja_robot.jpg",
    posterFull: "/posters/ja_robot_full.jpg",
    length: 115,
    url: "Já robot (2004) CZ.mkv"
  },
  "Jak vycvičit draka": {
    year: 2025,
    review: 82,
    genre: ["akční", "dobrodružný", "fantasy", "rodinný"],
    poster: "/posters/jak_vycvicit_draka.jpg",
    posterFull: "/posters/jak_vycvicit_draka_full.jpg",
    length: 125,
    url: "Jak vycvičit draka (2025) CZ.mkv"
  },
  "Jason Bourne": {
    year: 2016,
    review: 68,
    genre: ["akční", "thriller"],
    poster: "/posters/jason_bourne.jpg",
    posterFull: "/posters/jason_bourne.jpg",
    length: 123,
    url: "Jason Bourne (2016) CZ.mkv"
  },
  "Jedna ruka netleská": {
    year: 2003,
    review: 70,
    genre: ["komedie"],
    poster: "/posters/jedna_ruka_netleska.jpg",
    posterFull: "/posters/jedna_ruka_netleska_full.jpg",
    length: 103,
    url: "Jedna ruka netleská (2003) CZ.mp4"
  },
  "Jeníček a Mařenka - Lovci čarodějnic": {
    year: 2013,
    review: 67,
    genre: ["fantasy", "dobrodružný", "akční", "horor"],
    poster: "/posters/jenicek_a_marenka.jpg",
    posterFull: "/posters/jenicek_a_marenka_full.jpg",
    length: 87,
    url: "Jeníček a Mařenka - Lovci čarodějnic (2013) CZ.mkv"
  },
  "John Wick": {
    year: 2014,
    review: 77,
    genre: ["akční", "krimi", "thriller"],
    poster: "/posters/john_wick.jpg",
    posterFull: "/posters/john_wick.jpg",
    length: 101,
    url: "John Wick (2014) CZ.mkv"
  },
  "Jumper": {
    year: 2008,
    review: 59,
    genre: ["akční", "dobrodružný", "sci-fi", "thriller"],
    poster: "/posters/jumper.jpg",
    posterFull: "/posters/jumper_full.jpg",
    length: 88,
    url: "Jumper (2008) CZ.mkv"
  },
  "Kazatel": {
    year: 2011,
    review: 56,
    genre: ["akční", "horor", "thriller", "sci-fi", "fantasy"],
    poster: "/posters/kazatel.jpg",
    posterFull: "/posters/kazatel_full.jpg",
    length: 84,
    url: "Kazatel (2011) CZ.mkv"
  },
  "Koralína a svět za tajnými dveřmi": {
    year: 2009,
    review: 81,
    genre: ["animovaný", "rodinný", "fantasy", "dobrodružný"],
    poster: "/posters/koralina_a_svet_za_tajnymi_dvermi.jpg",
    posterFull: "/posters/koralina_a_svet_za_tajnymi_dvermi_full.jpg",
    length: 96,
    url: "Koralína a svět za tajnými dveřmi (2009) CZ.mkv"
  },
  "Král Artuš - Legenda o meči": {
    year: 2017,
    review: 73,
    genre: ["akční", "dobrodružný", "drama", "fantasy"],
    poster: "/posters/kral_artus_legenda_o_meci.jpg",
    posterFull: "/posters/kral_artus_legenda_o_meci_full.jpg",
    length: 126,
    url: "Král Artuš - Legenda o meči (2017) CZ.mkv"
  },
  "Let's Dance": {
    year: 2006,
    review: 61,
    genre: ["drama", "romantický", "hudební", "taneční"],
    poster: "/posters/lets_dance.jpg",
    posterFull: "/posters/lets_dance_full.jpg",
    length: 99,
    url: "Let's Dance (2006) CZ.avi"
  },
  "V pasti": {
    year: 2025,
    review: 59,
    genre: ["thriller"],
    poster: "/posters/v_pasti.jpg",
    posterFull: "/posters/v_pasti_full.jpg",
    length: 95,
    url: "V pasti (2025) CZ tit.mkv"
  },
  "Logan - Wolverine": {
    year: 2017,
    review: 84,
    genre: ["sci-fi", "akční", "thriller", "drama"],
    poster: "/posters/logan_wolverine.jpg",
    posterFull: "/posters/logan_wolverine_full.jpg",
    length: 137,
    url: "Logan - Wolverine (2017) CZ.mkv"
  },
  "Matrix": {
    year: 1999,
    review: 90,
    genre: ["akční", "sci-fi"],
    poster: "/posters/matrix.jpg",
    posterFull: "/posters/matrix_full.jpg",
    length: 136,
    url: "Matrix (1999) CZ.mkv"
  },
  "Matrix 2 - Reloaded": {
    year: 2003,
    review: 78,
    genre: ["akční", "sci-fi"],
    poster: "/posters/matrix_2_reloaded.jpg",
    posterFull: "/posters/matrix_2_reloaded_full.jpg",
    length: 138,
    url: "Matrix 2 - Reloaded (2003) CZ.mkv"
  },
  "Matrix 3 - Revolutions": {
    year: 2003,
    review: 74,
    genre: ["akční", "sci-fi"],
    poster: "/posters/matrix_3_revolutions.jpg",
    posterFull: "/posters/matrix_3_revolutions_full.jpg",
    length: 129,
    url: "Matrix 3 - Revolutions (2003) CZ.mkv"
  },
  "Mickey 17": {
    year: 2025,
    review: 63,
    genre: ["sci-fi", "drama", "komedie"],
    poster: "/posters/mickey_17.jpg",
    posterFull: "/posters/mickey_17_full.jpg",
    length: 136,
    url: "Mickey 17 (2025) CZ.mkv"
  },
  "Nezvěstná": {
    year: 2023,
    review: 72,
    genre: ["drama", "thriller"],
    poster: "/posters/nezvestna.jpg",
    posterFull: "/posters/nezvestna_full.jpg",
    length: 111,
    url: "Missing (2023) CZ.mkv"
  },
  "Mlčení jehňátek": {
    year: 1991,
    review: 91,
    genre: ["thriller", "krimi", "horor", "drama"],
    poster: "/posters/mlceni_jehnatek.jpg",
    posterFull: "/posters/mlceni_jehnatek_full.jpg",
    length: 118,
    url: "Mlčení jehňátek (1991) CZ.mkv"
  },
  "Monstrum": {
    year: 2008,
    review: 72,
    genre: ["sci-fi", "thriller", "mysteriózní", "horor"],
    poster: "/posters/monstrum.jpg",
    posterFull: "/posters/monstrum.jpg",
    length: 85,
    url: "Monstrum (2008) CZ.mkv"
  },
  "Mrtvá nevěsta Tima Burtona": {
    year: 2005,
    review: 84,
    genre: ["animovaný", "fantasy", "romantický", "muzikál"],
    poster: "/posters/mrtva_nevesta_tima_burtona.jpg",
    posterFull: "/posters/mrtva_nevesta_tima_burtona_full.jpg",
    length: 74,
    url: "Mrtvá nevěsta Tima Burtona (2005) CZ.mp4"
  },
  "Můj policista": {
    year: 2022,
    review: 68,
    genre: ["drama"],
    poster: "/posters/muj_policista.jpg",
    posterFull: "/posters/muj_policista_full.jpg",
    length: 113,
    url: "Můj policista (2022) CZ.mkv"
  },
  "Muži v černém": {
    year: 1997,
    review: 80,
    genre: ["komedie", "sci-fi", "akční"],
    poster: "/posters/muzi_v_cernem.jpg",
    posterFull: "/posters/muzi_v_cernem_full.jpg",
    length: 98,
    url: "Muži v černém (1997) CZ.mkv"
  },
  "Na plech": {
    year: 2025,
    review: 65,
    genre: ["komedie"],
    poster: "/posters/na_plech.jpg",
    posterFull: "/posters/na_plech_full.jpg",
    length: 99,
    url: "Na plech (2025) CZ.mkv"
  },
  "Nerve - Hra o život": {
    year: 2016,
    review: 66,
    genre: ["dobrodružný", "krimi", "mysteriózní", "sci-fi", "thriller"],
    poster: "/posters/nerve_hra_o_zivot.jpg",
    posterFull: "/posters/nerve_hra_o_zivot.jpg",
    length: 96,
    url: "Nerve - Hra o život (2016) CZ.mkv"
  },
  "Neuvěřitelný Hulk": {
    year: 2008,
    review: 62,
    genre: ["akční", "thriller", "sci-fi"],
    poster: "/posters/neuveritelny_hulk.jpg",
    posterFull: "/posters/neuveritelny_hulk_full.jpg",
    length: 112,
    url: "Neuvěřitelný Hulk (2008) CZ.mkv"
  },
  "Next": {
    year: 2007,
    review: 64,
    genre: ["akční", "sci-fi", "thriller"],
    poster: "/posters/next.jpg",
    posterFull: "/posters/next_full.jpg",
    length: 96,
    url: "Next (2007) CZ.mkv"
  },
  "Než jsem tě poznala": {
    year: 2016,
    review: 80,
    genre: ["drama", "romantický"],
    poster: "/posters/nez_jsem_te_poznala.jpg",
    posterFull: "/posters/nez_jsem_te_poznala_full.jpg",
    length: 110,
    url: "Než jsem tě poznala (2016) CZ.mp4"
  },
  "Nezlomní": {
    year: 2024,
    review: 73,
    genre: ["dobrodružný", "drama"],
    poster: "/posters/nezlomni.jpg",
    posterFull: "/posters/nezlomni_full.jpg",
    length: 106,
    url: "Nezlomní (2024) CZ.mkv"
  },
  "Nezvratný osud": {
    year: 2000,
    review: 75,
    genre: ["horor", "thriller"],
    poster: "/posters/nezvratny_osud.jpg",
    posterFull: "/posters/nezvratny_osud_full.jpg",
    length: 98,
    url: "Nezvratný osud (2000) CZ.mkv"
  },
  "Nezvratný osud 2": {
    year: 2003,
    review: 67,
    genre: ["horor", "thriller"],
    poster: "/posters/nezvratny_osud_2.jpg",
    posterFull: "/posters/nezvratny_osud_2_full.jpg",
    length: 90,
    url: "Nezvratný osud 2 (2003) CZ.mkv"
  },
  "Nikdo": {
    year: 2021,
    review: 78,
    genre: ["akční", "krimi", "thriller", "drama"],
    poster: "/posters/nikdo.jpg",
    posterFull: "/posters/nikdo_full.jpg",
    length: 92,
    url: "Nikdo (2021) CZ.avi"
  },
  "Nosferatu": {
    year: 2024,
    review: 73,
    genre: ["horor", "fantasy", "drama"],
    poster: "/posters/nosferatu.jpg",
    posterFull: "/posters/nosferatu_full.jpg",
    length: 132,
    url: "Nosferatu (2024) CZ.mkv"
  },
  "Novocaine": {
    year: 2025,
    review: 66,
    genre: ["akční", "thriller", "komedie"],
    poster: "/posters/novocaine.jpg",
    posterFull: "/posters/novocaine_full.jpg",
    length: 110,
    url: "Novocaine (2025) CZ tit.mkv"
  },
  "Občanská válka": {
    year: 2024,
    review: 66,
    genre: ["road movie", "drama", "válečný"],
    poster: "/posters/obcanska_valka.jpg",
    posterFull: "/posters/obcanska_valka_full.jpg",
    length: 108,
    url: "Občanská válka (2024) CZ.mkv"
  },
  "Pán prstenů - Dvě věže": {
    year: 2002,
    review: 89,
    genre: ["fantasy", "dobrodružný", "akční"],
    poster: "/posters/pan_prstenu_2.jpg",
    posterFull: "/posters/pan_prstenu_2_full.jpg",
    length: 172,
    url: "Pán prstenů - Dvě věže (2002) CZ.mp4"
  },
  "Pán prstenů - Návrat krále": {
    year: 2003,
    review: 91,
    genre: ["fantasy", "dobrodružný", "akční"],
    poster: "/posters/pan_prstenu_3.jpg",
    posterFull: "/posters/pan_prstenu_3_full.jpg",
    length: 201,
    url: "Pán prstenů - Návrat krále (2003) CZ.mp4"
  },
  "Pán prstenů - Společenstvo prstenu": {
    year: 2001,
    review: 91,
    genre: ["fantasy", "dobrodružný", "akční"],
    poster: "/posters/pan_prstenu_1.jpg",
    posterFull: "/posters/pan_prstenu_1_full.jpg",
    length: 172,
    url: "Pán prstenů - Společenstvo prstenu (2001) CZ.mkv"
  },
  "Pařba na třetí": {
    year: 2013,
    review: 61,
    genre: ["komedie"],
    poster: "/posters/parba_na_treti.jpg",
    posterFull: "/posters/parba_na_treti_full.jpg",
    length: 100,
    url: "Pařba na třetí (2013) CZ.mkv"
  },
  "Pařba v Bangkoku": {
    year: 2011,
    review: 66,
    genre: ["komedie"],
    poster: "/posters/parba_v_bangkoku.jpg",
    posterFull: "/posters/parba_v_bangkoku_full.jpg",
    length: 102,
    url: "Pařba v Bangkoku (2011) CZ.avi"
  },
  "Pařba ve Vegas": {
    year: 2009,
    review: 81,
    genre: ["komedie"],
    poster: "/posters/parba_ve_vegas.jpg",
    posterFull: "/posters/parba_ve_vegas_full.jpg",
    length: 96,
    url: "Pařba ve Vegas (2009) CZ.mkv"
  },
  "Párty Hárd": {
    year: 2019,
    review: 60,
    genre: ["komedie"],
    poster: "/posters/party_hard.jpg",
    posterFull: "/posters/party_hard.jpg",
    length: 62,
    url: "Párty Hárd (2019).mp4"
  },
  "Párty Hárder": {
    year: 2022,
    review: 68,
    genre: ["komedie"],
    poster: "/posters/party_harder.jpg",
    posterFull: "/posters/party_harder_full.jpg",
    length: 100,
    url: "Párty Hárder (2022) CZ.mkv"
  },
  "Percy Jackson - Zloděj blesku": {
    year: 2010,
    review: 57,
    genre: ["fantasy", "dobrodružný", "komedie"],
    poster: "/posters/percy_jackson_1.jpg",
    posterFull: "/posters/percy_jackson_1_full.jpg",
    length: 114,
    url: "Percy Jackson - Zloděj blesku (2010) CZ.mkv"
  },
  "Percy Jackson 2 - Moře nestvůr": {
    year: 2013,
    review: 53,
    genre: ["fantasy", "dobrodružný", "rodinný"],
    poster: "/posters/percy_jackson_2.jpg",
    posterFull: "/posters/percy_jackson_2_full.jpg",
    length: 108,
    url: "Percy Jackson 2 - Moře nestvůr (2013) CZ.mkv"
  },
  "Počátek": {
    year: 2010,
    review: 89,
    genre: ["akční", "sci-fi", "thriller", "mysteriózní", "dobrodružný"],
    poster: "/posters/pocatek.jpg",
    posterFull: "/posters/pocatek_full.jpg",
    length: 148,
    url: "Počátek (2010) CZ.avi"
  },
  "Poslední lovec čarodějnic": {
    year: 2015,
    review: 56,
    genre: ["akční", "dobrodružný", "fantasy"],
    poster: "/posters/posledni_lovec_carodejnic.jpg",
    posterFull: "/posters/posledni_lovec_carodejnic_full.jpg",
    length: 106,
    url: "Poslední lovec čarodějnic (2015) CZ.mp4"
  },
  "Pravá blondýnka": {
    year: 2001,
    review: 60,
    genre: ["komedie", "romantický"],
    poster: "/posters/prava_blondynka.jpg",
    posterFull: "/posters/prava_blondynka.jpg",
    length: 93,
    url: "Pravá blondýnka (2001) CZ.mkv"
  },
  "Prci prci prcičky": {
    year: 1999,
    review: 71,
    genre: ["komedie", "romantický"],
    poster: "/posters/prci_prci_prcicky.jpg",
    posterFull: "/posters/prci_prci_prcicky.jpg",
    length: 95,
    url: "Prci prci prcičky (1999) CZ.mkv"
  },
  "Prci prci prcičky 2": {
    year: 2001,
    review: 64,
    genre: ["komedie", "romantický"],
    poster: "/posters/prci_prci_prcicky_2.jpg",
    posterFull: "/posters/prci_prci_prcicky_2_full.jpg",
    length: 108,
    url: "Prci prci prcičky 2 (2001) CZ.avi"
  },
  "Prci prci prcičky 3 - Svatba": {
    year: 2003,
    review: 66,
    genre: ["komedie", "romantický"],
    poster: "/posters/prci_prci_prcicky_3.jpg",
    posterFull: "/posters/prci_prci_prcicky_3_full.jpg",
    length: 96,
    url: "Prci prci prcičky 3 - Svatba (2003) CZ.mkv"
  },
  "Prci prci prcičky 8 - Školní sraz": {
    year: 2012,
    review: 76,
    genre: ["komedie"],
    poster: "/posters/prci_prci_prcicky_8.jpg",
    posterFull: "/posters/prci_prci_prcicky_8_full.jpg",
    length: 113,
    url: "Prci prci prcičky 8 - Školní sraz (2012) CZ.mkv"
  },
  "Příběh žraloka": {
    year: 2004,
    review: 65,
    genre: ["animovaný", "dobrodružný", "komedie", "rodinný"],
    poster: "/posters/pribeh_zraloka.jpg",
    posterFull: "/posters/pribeh_zraloka_full.jpg",
    length: 90,
    url: "Příběh žraloka (2004) CZ.mkv"
  },
  "Profile": {
    year: 2018,
    review: 75,
    genre: ["thriller"],
    poster: "/posters/profile.jpg",
    posterFull: "/posters/profile_full.jpg",
    length: 105,
    url: "Profile (2018) SK tit.mkv"
  },
  "Pulp Fiction - Historky z podsvětí": {
    year: 1994,
    review: 91,
    genre: ["krimi", "drama"],
    poster: "/posters/pulp_fiction.jpg",
    posterFull: "/posters/pulp_fiction.jpg",
    length: 154,
    url: "Pulp Fiction - Historky z podsvětí (1994) CZ.mkv"
  },
  "Ready Player One": {
    year: 2018,
    review: 81,
    genre: ["akční", "sci-fi", "dobrodružný"],
    poster: "/posters/ready_player_one.jpg",
    posterFull: "/posters/ready_player_one_full.jpg",
    length: 140,
    url: "Ready Player One (2018) CZ.mkv"
  },
  "Roboti": {
    year: 2005,
    review: 65,
    genre: ["animovaný", "komedie", "sci-fi", "fantasy"],
    poster: "/posters/roboti.jpg",
    posterFull: "/posters/roboti_full.jpg",
    length: 91,
    url: "Roboti (2005) CZ.mkv"
  },
  "Rogue One Star Wars Story": {
    year: 2016,
    review: 78,
    genre: ["akční", "dobrodružný", "fantasy", "sci-fi"],
    poster: "/posters/rogue_one_star_wars.jpg",
    posterFull: "/posters/rogue_one_star_wars_full.jpg",
    length: 133,
    url: "Rogue One Star Wars Story (2016) CZ.mkv"
  },
  "Roklina": {
    year: 2025,
    review: 71,
    genre: ["akční", "sci-fi", "horor", "romantický"],
    poster: "/posters/roklina.jpg",
    posterFull: "/posters/roklina_full.jpg",
    length: 127,
    url: "Roklina (2025) CZ tit.mkv"
  },
  "Rychle a zběsile": {
    year: 2001,
    review: 73,
    genre: ["akční", "krimi", "thriller"],
    poster: "/posters/rychle_a_zbesile.jpg",
    posterFull: "/posters/rychle_a_zbesile_full.jpg",
    length: 106,
    url: "Rychle a zběsile (2001) CZ.mp4"
  },
  "Rychle a zběsile 3 - Tokijská jízda": {
    year: 2006,
    review: 56,
    genre: ["akční", "krimi", "thriller"],
    poster: "/posters/rychle_a_zbesile_3.jpg",
    posterFull: "/posters/rychle_a_zbesile_3_full.jpg",
    length: 100,
    url: "Rychle a zběsile 3 - Tokijská jízda (2006) CZ.mkv"
  },
  "Scary Movie": {
    year: 2000,
    review: 65,
    genre: ["komedie", "horor", "mysteriózní"],
    poster: "/posters/scary_movie.jpg",
    posterFull: "/posters/scary_movie_full.jpg",
    length: 85,
    url: "Scary Movie (2000) CZ.mkv"
  },
  "Scary Movie 2": {
    year: 2001,
    review: 48,
    genre: ["komedie", "horor"],
    poster: "/posters/scary_movie_2.jpg",
    posterFull: "/posters/scary_movie_2.jpg",
    length: 79,
    url: "Scary Movie 2 (2001) CZ.mkv"
  },
  "Scary Movie 3": {
    year: 2003,
    review: 60,
    genre: ["komedie", "horor"],
    poster: "/posters/scary_movie_3.jpg",
    posterFull: "/posters/scary_movie_3_full.jpg",
    length: 81,
    url: "Scary Movie 3 (2003) CZ.mkv"
  },
  "Scary Movie 4": {
    year: 2006,
    review: 48,
    genre: ["komedie", "horor"],
    poster: "/posters/scary_movie_4.jpg",
    posterFull: "/posters/scary_movie_4_full.jpg",
    length: 83,
    url: "Scary Movie 4 (2006) CZ.mkv"
  },
  "Scary Movie 5": {
    year: 2013,
    review: 36,
    genre: ["komedie"],
    poster: "/posters/scary_movie_5.jpg",
    posterFull: "/posters/scary_movie_5_full.jpg",
    length: 86,
    url: "Scary Movie 5 (2013) CZ.mkv"
  },
  "Searching": {
    year: 2018,
    review: 77,
    genre: ["mysteriózní", "thriller", "drama"],
    poster: "/posters/searching.jpg",
    posterFull: "/posters/searching_full.jpg",
    length: 102,
    url: "Searching (2018) CZ.mp4"
  },
  "Seznamte se Joe Black": {
    year: 1998,
    review: 79,
    genre: ["romantický", "drama", "fantasy", "mysteriózní"],
    poster: "/posters/seznamte_se_joe_black.jpg",
    posterFull: "/posters/seznamte_se_joe_black__full.jpg",
    length: 178,
    url: "Seznamte se Joe Black (1998) CZ.mkv"
  },
  "Sherlock Holmes - Hra stínů": {
    year: 2011,
    review: 75,
    genre: ["akční", "dobrodružný", "krimi", "mysteriózní", "thriller"],
    poster: "/posters/sherlock_holmes_hra_stinu.jpg",
    posterFull: "/posters/sherlock_holmes_hra_stinu_full.jpg",
    length: 123,
    url: "Sherlock Holmes - Hra stínů (2011) CZ.mkv"
  },
  "Sherlock Holmes": {
    year: 2009,
    review: 80,
    genre: ["akční", "dobrodružný", "krimi", "mysteriózní", "thriller"],
    poster: "/posters/sherlock_holmes.jpg",
    posterFull: "/posters/sherlock_holmes_full.jpg",
    length: 128,
    url: "Sherlock Holmes (2009) CZ.mkv"
  },
  "Sinners": {
    year: 2025,
    review: 73,
    genre: ["akční", "horor", "thriller", "drama"],
    poster: "/posters/hrisnici.jpg",
    posterFull: "/posters/hrisnici_full.jpg",
    length: 137,
    url: "Sinners (2025) CZ tit.mkv"
  },
  "Skautův průvodce zombie apokalypsou": {
    year: 2015,
    review: 67,
    genre: ["horor", "akční", "komedie"],
    poster: "/posters/skautuv_pruvodce_zombie_apokalypsou.jpg",
    posterFull: "/posters/skautuv_pruvodce_zombie_apokalypsou_full.jpg",
    length: 93,
    url: "Skautův průvodce zombie apokalypsou (2015) CZ.mkv"
  },
  "Skin": {
    year: 2018,
    review: 60,
    genre: ["drama"],
    poster: "/posters/skin.jpg",
    posterFull: "/posters/skin_full.jpg",
    length: 110,
    url: "Skin (2018) ENG tit.mkv"
  },
  "Sleeping Dogs": {
    year: 2024,
    review: 63,
    genre: ["krimi", "mysteriózní", "thriller"],
    poster: "/posters/sleeping_dogs.jpg",
    posterFull: "/posters/sleeping_dogs_full.jpg",
    length: 110,
    url: "Sleeping Dogs (2024) CZ.mkv"
  },
  "Snowden": {
    year: 2016,
    review: 75,
    genre: ["životopisný", "thriller", "drama"],
    poster: "/posters/snowden.jpg",
    posterFull: "/posters/snowden_full.jpg",
    length: 134,
    url: "Snowden (2016) CZ tit.mp4"
  },
  "Solo Star Wars Story": {
    year: 2018,
    review: 70,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/solo_star_wars.jpg",
    posterFull: "/posters/solo_star_wars_full.jpg",
    length: 135,
    url: "Solo Star Wars Story (2018) CZ.mkv"
  },
  "Souboj Titánů": {
    year: 2010,
    review: 56,
    genre: ["akční", "drama", "fantasy", "dobrodružný"],
    poster: "/posters/souboj_titanu.jpg",
    posterFull: "/posters/souboj_titanu_full.jpg",
    length: 102,
    url: "Souboj Titánů (2010) CZ.mkv"
  },
  "Spider-Man - Bez domova": {
    year: 2021,
    review: 81,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/spiderman_bez_domova.png",
    posterFull: "/posters/spiderman_bez_domova_full.png",
    length: 148,
    url: "Spider-Man - Bez domova (2021) CZ.mkv"
  },
  "Spider-Man - Homecoming": {
    year: 2017,
    review: 73,
    genre: ["akční", "dobrodružný", "sci-fi"],
    poster: "/posters/spiderman_homecoming.jpg",
    posterFull: "/posters/spiderman_homecoming_full.jpg",
    length: 133,
    url: "Spider-Man - Homecoming (2017) CZ.mkv"
  },
  "Spider-Man - Napříč paralelními světy": {
    year: 2023,
    review: 87,
    genre: ["animovaný", "akční", "dobrodružný", "sci-fi"],
    poster: "/posters/spiderman_napric_paralelnimi_svety.png",
    posterFull: "/posters/spiderman_napric_paralelnimi_svety_full.png",
    length: 140,
    url: "Spider-Man - Napříč paralelními světy (2023) CZ.mkv"
  },
  "Spider-Man - Paralelní světy": {
    year: 2018,
    review: 86,
    genre: ["animovaný", "akční", "dobrodružný", "sci-fi"],
    poster: "/posters/spiderman_paralelni_svety.jpg",
    posterFull: "/posters/spiderman_paralelni_svety_full.jpg",
    length: 117,
    url: "Spider-Man - Paralelní světy (2018) CZ.mkv"
  },
  "Spider-Man": {
    year: 2002,
    review: 77,
    genre: ["akční", "dobrodružný", "fantasy"],
    poster: "/posters/spiderman_1.jpg",
    posterFull: "/posters/spiderman_1_full.jpg",
    length: 121,
    url: "Spider-Man (2002) CZ.mkv"
  },
  "Spider-Man 2": {
    year: 2004,
    review: 75,
    genre: ["akční", "fantasy"],
    poster: "/posters/spiderman_2.jpg",
    posterFull: "/posters/spiderman_2_full.jpg",
    length: 127,
    url: "Spider-Man 2 (2004) CZ.mp4"
  },
  "Spider-Man 3": {
    year: 2007,
    review: 63,
    genre: ["akční", "dobrodružný", "fantasy"],
    poster: "/posters/spiderman_3.jpg",
    posterFull: "/posters/spiderman_3_full.jpg",
    length: 139,
    url: "Spider-Man 3 (2007) CZ.mkv"
  },
  "Star Wars - Epizoda 1 - Skrytá hrozba": {
    year: 1999,
    review: 79,
    genre: ["sci-fi", "fantasy", "dobrodružný", "akční"],
    poster: "/posters/star_wars_1.jpg",
    posterFull: "/posters/star_wars_1_full.jpg",
    length: 136,
    url: "Star Wars - Epizoda 1 - Skrytá hrozba (1999) CZ.mkv"
  },
  "Star Wars - Epizoda 2 - Klony útočí": {
    year: 2002,
    review: 80,
    genre: ["sci-fi", "fantasy", "dobrodružný", "akční"],
    poster: "/posters/star_wars_2.jpg",
    posterFull: "/posters/star_wars_2_full.jpg",
    length: 142,
    url: "Star Wars - Epizoda 2 - Klony útočí (2002) CZ.mkv"
  },
  "Star Wars - Epizoda 3 - Pomsta Sithů": {
    year: 2005,
    review: 87,
    genre: ["sci-fi", "fantasy", "dobrodružný", "akční"],
    poster: "/posters/star_wars_3.jpg",
    posterFull: "/posters/star_wars_3_full.jpg",
    length: 140,
    url: "Star Wars - Epizoda 3 - Pomsta Sithů (2005) CZ.mkv"
  },
  "Star Wars - Epizoda 4 - Nová naděje": {
    year: 1977,
    review: 88,
    genre: ["sci-fi", "fantasy", "dobrodružný", "akční"],
    poster: "/posters/star_wars_4.jpg",
    posterFull: "/posters/star_wars_4_full.jpg",
    length: 121,
    url: "Star Wars - Epizoda 4 - Nová naděje (1977) CZ.mkv"
  },
  "Star Wars - Epizoda 5 - Imperium vrací úder": {
    year: 1980,
    review: 89,
    genre: ["sci-fi", "dobrodružný", "fantasy", "akční"],
    poster: "/posters/star_wars_5.jpg",
    posterFull: "/posters/star_wars_5_full.jpg",
    length: 124,
    url: "Star Wars - Epizoda 5 - Imperium vrací úder (1980) CZ.mkv"
  },
  "Star Wars - Epizoda 6 - Návrat Jediho": {
    year: 1983,
    review: 87,
    genre: ["sci-fi", "dobrodružný", "fantasy", "akční"],
    poster: "/posters/star_wars_6.jpg",
    posterFull: "/posters/star_wars_6_full.jpg",
    length: 131,
    url: "Star Wars - Epizoda 6 - Návrat Jediho (1983) CZ.mkv"
  },
  "Star Wars - Epizoda 7 - Síla se probouzí": {
    year: 2015,
    review: 74,
    genre: ["sci-fi", "dobrodružný", "akční", "fantasy"],
    poster: "/posters/star_wars_7.jpg",
    posterFull: "/posters/star_wars_7_full.jpg",
    length: 136,
    url: "Star Wars - Epizoda 7 - Síla se probouzí (2015) CZ.mkv"
  },
  "Star Wars - Epizoda 8 - Poslední z Jediů": {
    year: 2017,
    review: 68,
    genre: ["akční", "dobrodružný", "fantasy", "sci-fi"],
    poster: "/posters/star_wars_8.jpg",
    posterFull: "/posters/star_wars_8_full.jpg",
    length: 152,
    url: "Star Wars - Epizoda 8 - Poslední z Jediů (2017) CZ.mkv"
  },
  "Star Wars - Epizoda 9 - Vzestup Skywalkera": {
    year: 2019,
    review: 57,
    genre: ["sci-fi", "dobrodružný", "akční", "fantasy"],
    poster: "/posters/star_wars_9.jpg",
    posterFull: "/posters/star_wars_9_full.jpg",
    length: 142,
    url: "Star Wars - Epizoda 9 - Vzestup Skywalkera (2019) CZ.mkv"
  },
  "Strážci": {
    year: 2024,
    review: 56,
    genre: ["horor", "mysteriózní", "thriller", "fantasy"],
    poster: "/posters/strazci.jpg",
    posterFull: "/posters/strazci_full.jpg",
    length: 101,
    url: "Strážci (2024) CZ.avi"
  },
  "Superbad": {
    year: 2007,
    review: 69,
    genre: ["komedie"],
    poster: "/posters/superbad.jpg",
    posterFull: "/posters/superbad_full.jpg",
    length: 113,
    url: "Superbad (2007) CZ.mkv"
  },
  "Superman": {
    year: 2025,
    review: 64,
    genre: ["akční", "dobrodružný", "sci-fi", "fantasy"],
    poster: "/posters/superman.jpg",
    posterFull: "/posters/superman_full.jpg",
    length: 129,
    url: "Superman (2025) CZ.mkv"
  },
  "Surfař": {
    year: 2024,
    review: 61,
    genre: ["thriller"],
    poster: "/posters/surfar.png",
    posterFull: "/posters/surfar_full.png",
    length: 99,
    url: "Surfař (2024) CZ.mkv"
  },
  "Tajemství jezera Caddo": {
    year: 2024,
    review: 63,
    genre: ["drama", "mysteriózní", "thriller"],
    poster: "/posters/tajemstvi_jezera_caddo.jpg",
    posterFull: "/posters/tajemstvi_jezera_caddo_full.jpg",
    length: 103,
    url: "Tajemství jezera Caddo (2024) CZ.mkv"
  },
  "Tajemství loňského léta": {
    year: 2025,
    review: 52,
    genre: ["horor", "mysteriózní", "thriller"],
    poster: "/posters/tajemstvi_lonskeho_leta.jpg",
    posterFull: "/posters/tajemstvi_lonskeho_leta_full.jpg",
    length: 111,
    url: "Tajemství loňského léta (2025) CZ tit.mkv"
  },
  "Temný rytíř": {
    year: 2008,
    review: 91,
    genre: ["akční", "drama", "krimi", "thriller"],
    poster: "/posters/temny_rytir.jpg",
    posterFull: "/posters/temny_rytir_full.jpg",
    length: 152,
    url: "Temný rytíř (2008) CZ.mkv"
  },
  "Temný rytíř povstal": {
    year: 2012,
    review: 86,
    genre: ["akční", "krimi", "drama", "thriller"],
    poster: "/posters/temny_rytir_povstal.jpg",
    posterFull: "/posters/temny_rytir_povstal_full.jpg",
    length: 158,
    url: "Temný rytíř povstal (2012) CZ.mkv"
  },
  "Ten co tě sleduje": {
    year: 2014,
    review: 47,
    genre: ["thriller", "krimi", "mysteriózní"],
    poster: "/posters/ten_co_te_sleduje.jpg",
    posterFull: "/posters/ten_co_te_sleduje.jpg",
    length: 100,
    url: "Ten co tě sleduje (2014) ENG.mp4"
  },
  "Tenet": {
    year: 2020,
    review: 73,
    genre: ["akční", "drama", "sci-fi"],
    poster: "/posters/tenet.jpg",
    posterFull: "/posters/tenet_full.jpg",
    length: 150,
    url: "Tenet (2020) CZ.mkv"
  },
  "Terminator - Salvation": {
    year: 2009,
    review: 65,
    genre: ["sci-fi", "akční", "thriller"],
    poster: "/posters/terminator_salvation.jpg",
    posterFull: "/posters/terminator_salvation_full.jpg",
    length: 110,
    url: "Terminator - Salvation (2009) CZ.mp4"
  },
  "The Amateur": {
    year: 2025,
    review: 64,
    genre: ["akční", "thriller"],
    poster: "/posters/amater.jpg",
    posterFull: "/posters/amater_full.jpg",
    length: 123,
    url: "The Amateur (2025) CZ tit.mkv"
  },
  "The Avengers - Age of Ultron": {
    year: 2015,
    review: 73,
    genre: ["akční", "dobrodružný", "sci-fi", "fantasy"],
    poster: "/posters/avengers_age_of_ultron.jpg",
    posterFull: "/posters/avengers_age_of_ultron_full.jpg",
    length: 141,
    url: "The Avengers - Age of Ultron (2015) CZ.mkv"
  },
  "The Avengers 1": {
    year: 2012,
    review: 83,
    genre: ["akční", "dobrodružný", "sci-fi", "fantasy"],
    poster: "/posters/avengers.jpg",
    posterFull: "/posters/avengers_full.jpg",
    length: 143,
    url: "The Avengers 1 (2012) CZ.mp4"
  },
  "The Cloverfield Paradox": {
    year: 2018,
    review: 52,
    genre: ["horor", "mysteriózní", "sci-fi", "thriller"],
    poster: "/posters/the_cloverfield_effect.jpg",
    posterFull: "/posters/the_cloverfield_effect_full.jpg",
    length: 102,
    url: "The Cloverfield Paradox (2018) CZ tit.mkv"
  },
  "The Den": {
    year: 2013,
    review: 52,
    genre: ["horor", "mysteriózní", "sci-fi", "thriller"],
    poster: "/posters/the_den.jpg",
    posterFull: "/posters/the_den.jpg",
    length: 77,
    url: "The Den (2013) CZ tit.mp4"
  },
  "The LEGO Batman Movie": {
    year: 2017,
    review: 72,
    genre: ["animovaný", "akční", "dobrodružný", "komedie", "rodinný", "fantasy"],
    poster: "/posters/the_lego_batman.jpg",
    posterFull: "/posters/the_lego_batman_full.jpg",
    length: 104,
    url: "The LEGO Batman Movie (2017) CZ.mkv"
  },
  "Thor": {
    year: 2011,
    review: 75,
    genre: ["akční", "dobrodružný", "fantasy"],
    poster: "/posters/thor.jpg",
    posterFull: "/posters/thor_full.jpg",
    length: 110,
    url: "Thor (2011) CZ.mkv"
  },
  "Thor 2 - Temný svět": {
    year: 2013,
    review: 71,
    genre: ["akční", "dobrodružný", "fantasy"],
    poster: "/posters/thor_temny_svet.jpg",
    posterFull: "/posters/thor_temny_svet_full.jpg",
    length: 112,
    url: "Thor 2 - Temný svět (2013) CZ.mp4"
  },
  "Thor 3 - Ragnarok": {
    year: 2017,
    review: 82,
    genre: ["akční", "dobrodružný", "fantasy", "sci-fi", "komedie"],
    poster: "/posters/thor_ragnarok.jpg",
    posterFull: "/posters/thor_ragnarok_full.jpg",
    length: 130,
    url: "Thor 3 - Ragnarok (2017) CZ.mp4"
  },
  "Thor 4 - Láska jako hrom": {
    year: 2022,
    review: 57,
    genre: ["akční", "dobrodružný", "fantasy"],
    poster: "/posters/thor_laska_jako_hrom.jpg",
    posterFull: "/posters/thor_laska_jako_hrom_full.jpg",
    length: 118,
    url: "Thor 4 - Láska jako hrom (2022) CZ.mp4"
  },
  "Thunderbolts": {
    year: 2025,
    review: 71,
    genre: ["akční", "dobrodružný", "sci-fi", "komedie", "drama"],
    poster: "/posters/thunderbolts.jpg",
    posterFull: "/posters/thunderbolts_full.jpg",
    length: 127,
    url: "Thunderbolts (2025) CZ.mkv"
  },
  "Toy Story - Příběh hraček": {
    year: 1995,
    review: 86,
    genre: ["animovaný", "dobrodružný", "komedie", "rodinný"],
    poster: "/posters/toy_story.jpg",
    posterFull: "/posters/toy_story_full.jpg",
    length: 80,
    url: "Toy Story - Příběh hraček (1995) CZ.mkv"
  },
  "Tron Legacy": {
    year: 2010,
    review: 72,
    genre: ["sci-fi", "akční", "thriller", "dobrodružný"],
    poster: "/posters/tron_legacy.jpg",
    posterFull: "/posters/tron_legacy_full.jpg",
    length: 125,
    url: "Tron Legacy (2010) CZ.mkv"
  },
  "Twilight Sága - Nový Měsíc": {
    year: 2009,
    review: 41,
    genre: ["dobrodružný", "drama", "fantasy", "romantický"],
    poster: "/posters/twilight_novy_mesic.jpg",
    posterFull: "/posters/twilight_novy_mesic_full.jpg",
    length: 125,
    url: "Twilight Sága - Nový Měsíc (2009) CZ.mkv"
  },
  "Twilight Sága - Rozbřesk 1 část": {
    year: 2011,
    review: 49,
    genre: ["dobrodružný", "drama", "fantasy", "romantický"],
    poster: "/posters/twilight_rozbresk_1.jpg",
    posterFull: "/posters/twilight_rozbresk_1_full.jpg",
    length: 112,
    url: "Twilight Sága - Rozbřesk 1 část (2011) CZ.mkv"
  },
  "Twilight sága - Rozbřesk 2 část": {
    year: 2012,
    review: 55,
    genre: ["dobrodružný", "drama", "fantasy", "romantický"],
    poster: "/posters/twilight_rozbresk_2.jpg",
    posterFull: "/posters/twilight_rozbresk_2_full.jpg",
    length: 115,
    url: "Twilight sága - Rozbřesk 2 část (2012) CZ.mkv"
  },
  "Twilight Sága - Stmívání": {
    year: 2008,
    review: 52,
    genre: ["dobrodružný", "drama", "fantasy", "romantický"],
    poster: "/posters/twilight_stmivani.jpg",
    posterFull: "/posters/twilight_stmivani_full.jpg",
    length: 117,
    url: "Twilight Sága - Stmívání (2008) CZ.mkv"
  },
  "Twilight Sága - Zatmění": {
    year: 2010,
    review: 47,
    genre: ["dobrodružný", "drama", "fantasy", "romantický"],
    poster: "/posters/twilight_zatmeni.jpg",
    posterFull: "/posters/twilight_zatmeni_full.jpg",
    length: 119,
    url: "Twilight Sága - Zatmění (2010) CZ.mkv"
  },
  "Twisters": {
    year: 2024,
    review: 62,
    genre: ["akční", "dobrodružný", "drama", "thriller", "katastrofický"],
    poster: "/posters/twisters.jpg",
    posterFull: "/posters/twisters_full.jpg",
    length: 122,
    url: "Twisters (2024) CZ.mkv"
  },
  "Tým na hraně": {
    year: 2010,
    review: 95,
    genre: ["dokumentární", "sportovní"],
    poster: "/posters/tym_na_hrane.jpg",
    posterFull: "/posters/tym_na_hrane.jpg",
    length: 61,
    url: "Tým na hraně (2010) CZ.mkv"
  },
  "Underworld": {
    year: 2003,
    review: 67,
    genre: ["akční", "fantasy", "thriller"],
    poster: "/posters/underworld.jpg",
    posterFull: "/posters/underworld_full.jpg",
    length: 117,
    url: "Underworld (2003) CZ.mkv"
  },
  "Underworld 2 - Evolution": {
    year: 2006,
    review: 64,
    genre: ["akční", "fantasy", "thriller"],
    poster: "/posters/underworld_2.jpg",
    posterFull: "/posters/underworld_2_full.jpg",
    length: 105,
    url: "Underworld 2 - Evolution (2006) CZ.mov"
  },
  "Underworld 3 - Vzpoura Lycanů": {
    year: 2009,
    review: 61,
    genre: ["akční", "fantasy", "dobrodružný", "thriller"],
    poster: "/posters/underworld_3.jpg",
    posterFull: "/posters/underworld_3.jpg",
    length: 89,
    url: "Underworld 3 - Vzpoura Lycanů (2009) CZ.mkv"
  },
  "Underworld 4 - Probuzení": {
    year: 2012,
    review: 59,
    genre: ["akční", "fantasy", "horor"],
    poster: "/posters/underworld_4.jpg",
    posterFull: "/posters/underworld_4_full.jpg",
    length: 85,
    url: "Underworld 4 - Probuzení (2012) CZ.mov"
  },
  "Underworld 5 - Krvavé války": {
    year: 2016,
    review: 51,
    genre: ["akční", "dobrodružný", "fantasy", "horor"],
    poster: "/posters/underworld_5.jpg",
    posterFull: "/posters/underworld_5_full.jpg",
    length: 91,
    url: "Underworld 5 - Krvavé války (2016) CZ.mov"
  },
  "Unfriend": {
    year: 2016,
    review: 63,
    genre: ["thriller", "horor"],
    poster: "/posters/unfriend.jpg",
    posterFull: "/posters/unfriend.jpg",
    length: 92,
    url: "Unfriend (2016) ENG.mp4"
  },
  "Until Dawn": {
    year: 2025,
    review: 56,
    genre: ["horor"],
    poster: "/posters/until_dawn.jpg",
    posterFull: "/posters/until_dawn_full.jpg",
    length: 103,
    url: "Until Dawn (2025) CZ tit.mkv"
  },
  "Úžasňákovi": {
    year: 2004,
    review: 84,
    genre: ["animovaný", "akční", "dobrodružný", "rodinný"],
    poster: "/posters/uzasnakovi.jpg",
    posterFull: "/posters/uzasnakovi_full.jpg",
    length: 115,
    url: "Úžasňákovi (2004) CZ.mkv"
  },
  "V Bruggách": {
    year: 2008,
    review: 82,
    genre: ["drama", "komedie", "krimi", "thriller"],
    poster: "/posters/v_bruggach.jpg",
    posterFull: "/posters/v_bruggach_full.jpg",
    length: 107,
    url: "V Bruggách (2008) CZ.mkv"
  },
  "V hlavě": {
    year: 2015,
    review: 82,
    genre: ["animovaný", "fantasy", "dobrodružný", "komedie", "drama", "rodinný"],
    poster: "/posters/v_hlave.jpg",
    posterFull: "/posters/v_hlave_full.jpg",
    length: 95,
    url: "V hlavě (2015) CZ.mkv"
  },
  "V hlavě 2": {
    year: 2024,
    review: 78,
    genre: ["animovaný", "fantasy", "dobrodružný", "komedie", "drama", "rodinný"],
    poster: "/posters/v_hlave_2.jpg",
    posterFull: "/posters/v_hlave_2_full.jpg",
    length: 97,
    url: "V hlavě 2 (2024) CZ.mkv"
  },
  "V zajetí démonů": {
    year: 2013,
    review: 82,
    genre: ["horor", "thriller", "mysteriózní"],
    poster: "/posters/v_zajeti_demonu.jpg",
    posterFull: "/posters/v_zajeti_demonu_full.jpg",
    length: 112,
    url: "V zajetí démonů (2013) CZ.mp4"
  },
  "V zajetí démonů 2": {
    year: 2016,
    review: 78,
    genre: ["horor", "thriller", "mysteriózní"],
    poster: "/posters/v_zajeti_demonu_2.jpg",
    posterFull: "/posters/v_zajeti_demonu_2_full.jpg",
    length: 134,
    url: "V zajetí démonů 2 (2016) CZ.mkv"
  },
  "Vampýrská akademie": {
    year: 2014,
    review: 45,
    genre: ["horor", "mysteriózní", "fantasy", "akční", "komedie"],
    poster: "/posters/vampyrska_akademie.jpg",
    posterFull: "/posters/vampyrska_akademie_full.jpg",
    length: 100,
    url: "Vampýrská akademie (2014) CZ.avi"
  },
  "Van Helsing": {
    year: 2004,
    review: 63,
    genre: ["fantasy", "dobrodružný", "horor", "akční", "mysteriózní", "thriller"],
    poster: "/posters/van_helsing.jpg",
    posterFull: "/posters/van_helsing_full.jpg",
    length: 131,
    url: "Van Helsing (2004) CZ.mkv"
  },
  "Včelař": {
    year: 2024,
    review: 62,
    genre: ["thriller", "akční"],
    poster: "/posters/vcelar.jpg",
    posterFull: "/posters/vcelar_full.jpg",
    length: 105,
    url: "Včelař (2024) CZ.mkv"
  },
  "Ve stínu": {
    year: 2012,
    review: 79,
    genre: ["krimi", "drama", "thriller"],
    poster: "/posters/ve_stinu.jpg",
    posterFull: "/posters/ve_stinu_full.jpg",
    length: 101,
    url: "Ve stínu (2012) CZ.mkv"
  },
  "Venom": {
    year: 2018,
    review: 72,
    genre: ["akční", "sci-fi", "thriller"],
    poster: "/posters/venom.jpg",
    posterFull: "/posters/venom_full.jpg",
    length: 112,
    url: "Venom (2018) CZ.mkv"
  },
  "Vlk z Wall Street": {
    year: 2013,
    review: 83,
    genre: ["životopisný", "komedie", "drama", "krimi"],
    poster: "/posters/vlk_z_wall_street.jpg",
    posterFull: "/posters/vlk_z_wall_street_full.jpg",
    length: 180,
    url: "Vlk z Wall Street (2013) CZ.mp4"
  },
  "Volný pád": {
    year: 1993,
    review: 85,
    genre: ["drama", "krimi", "psychologický", "thriller"],
    poster: "/posters/volny_pad.jpg",
    posterFull: "/posters/volny_pad_full.jpg",
    length: 113,
    url: "Volný pád (1993) CZ.mkv"
  },
  "Vrána": {
    year: 2024,
    review: 46,
    genre: ["akční", "krimi", "fantasy"],
    poster: "/posters/vrana.jpg",
    posterFull: "/posters/vrana_full.jpg",
    length: 110,
    url: "Vrána (2024) CZ.mkv"
  },
  "Warcraft - První střet": {
    year: 2016,
    review: 73,
    genre: ["fantasy", "dobrodružný", "akční"],
    poster: "/posters/warcraft.jpg",
    posterFull: "/posters/warcraft_full.jpg",
    length: 123,
    url: "Warcraft - První střet (2016) CZ.mp4"
  },
  "Wicked": {
    year: 2024,
    review: 65,
    genre: ["fantasy", "muzikál", "romantický"],
    poster: "/posters/wicked.jpg",
    posterFull: "/posters/wicked_full.jpg",
    length: 160,
    url: "Wicked (2024) CZ.mkv"
  },
  "Working Man": {
    year: 2025,
    review: 54,
    genre: ["akční", "krimi", "thriller"],
    poster: "/posters/working_man.jpg",
    posterFull: "/posters/working_man_full.jpg",
    length: 116,
    url: "Working Man (2025) CZ.mkv"
  },
  "X-Men Origins - Wolverine": {
    year: 2009,
    review: 73,
    genre: ["akční", "dobrodružný", "sci-fi", "thriller"],
    poster: "/posters/x-men_wolverine.jpg",
    posterFull: "/posters/x-men_wolverine_full.jpg",
    length: 103,
    url: "X-Men Origins - Wolverine (2009) CZ.avi"
  },
  "Zahulíme, uvidíme": {
    year: 2004,
    review: 67,
    genre: ["komedie", "dobrodružný"],
    poster: "/posters/zahulime_uvidime.jpg",
    posterFull: "/posters/zahulime_uvidime_full.jpg",
    length: 88,
    url: "Zahulíme, uvidíme (2004) CZ.mkv"
  },
  "Zahulíme, uvidíme 2": {
    year: 2008,
    review: 62,
    genre: ["dobrodružný", "komedie"],
    poster: "/posters/zahulime_uvidime_2.jpg",
    posterFull: "/posters/zahulime_uvidime_2_full.jpg",
    length: 103,
    url: "Zahulíme, uvidíme 2 (2008) CZ.mkv"
  },
  "Zahulíme, uvidíme 3": {
    year: 2011,
    review: 57,
    genre: ["komedie"],
    poster: "/posters/zahulime_uvidime_3.jpg",
    posterFull: "/posters/zahulime_uvidime_3_full.jpg",
    length: 86,
    url: "Zahulíme, uvidíme 3 (2011) CZ.avi"
  },
  "Zápisník alkoholičky": {
    year: 2024,
    review: 66,
    genre: ["drama"],
    poster: "/posters/zapisnik_alkoholicky.jpg",
    posterFull: "/posters/zapisnik_alkoholicky_full.jpg",
    length: 92,
    url: "Zápisník alkoholičky (2024) CZ.mkv"
  },
  "Zhasni a zemřeš": {
    year: 2016,
    review: 66,
    genre: ["horor"],
    poster: "/posters/zhasni_a_zemres.jpg",
    posterFull: "/posters/zhasni_a_zemres_full.jpg",
    length: 81,
    url: "Zhasni a zemřeš (2016) CZ.mkv"
  },
  "Zombieland": {
    year: 2009,
    review: 76,
    genre: ["komedie", "horor", "sci-fi", "dobrodružný"],
    poster: "/posters/zombieland.jpg",
    posterFull: "/posters/zombieland_full.jpg",
    length: 88,
    url: "Zombieland (2009) CZ.mkv"
  },
  "Zombieland 2 - Double Tap": {
    year: 2019,
    review: 68,
    genre: ["akční", "komedie", "horor"],
    poster: "/posters/zombieland_2.jpg",
    posterFull: "/posters/zombieland_2_full.jpg",
    length: 99,
    url: "Zombieland 2 - Double Tap (2019) CZ.mkv"
  },
  "Zúčtování 2": {
    year: 2025,
    review: 70,
    genre: ["akční", "krimi", "drama", "mysteriózní", "thriller"],
    poster: "/posters/zuctovani_2.jpg",
    posterFull: "/posters/zuctovani_2.jpg/full",
    length: 132,
    url: "Zúčtování 2 (2025) CZ.mkv"
  },
} satisfies Record<string, MovieData>