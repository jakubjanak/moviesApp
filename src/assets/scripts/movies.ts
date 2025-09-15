type MovieData = {
    year: number,
    review: number,
    genre: string[],
    poster: string,
    length: number,
}

export const movies = {
  "28 dní poté": {
    year: 2002,
    review: 72,
    genre: ["horor", "sci-fi", "thriller"],
    poster: "/posters/28_dni_pote.jpg",
    length: 108
  },
  "28 let poté": {
    year: 2025,
    review: 67,
    genre: ["horor", "sci-fi", "thriller"],
    poster: "/posters/28_let_pote.jpg",
    length: 115
  },
  // "33 životů": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "40 let panic": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "610 metrů nad zemí": {
  //   year: 2022,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Agent bez minulosti": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Andělé démoni": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Atlas": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Auta": {
  //   year: 2006,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Avengers 3 - Infinity War": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Avengers 4 - Endgame": {
  //   year: 2019,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Balerina": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Batman": {
  //   year: 2022,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Batman začíná": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Birds of Prey - Podivuhodná proměnna Harley Quinn": {
  //   year: 2020,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Black Widow": {
  //   year: 2021,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Blade Runner 2049": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Bourneovo ultimátum": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Bournův mýtus": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Captain America - Návrat prvního Avengera": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Captain America - Nový svět": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Captain America - Občanská válka": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Captain America - První Avenger": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Captain Marvel": {
  //   year: 2019,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Čarodějův učeň": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Černí baroni": {
  //   year: 1993,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Červený drak": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Chraň nás od zlého": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Constantine": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Deník Bridget Jones": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Divergence": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Divergence 2": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Divergence 3": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Doba Ledová": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Dobrodružství Žraločáka a Lávovky": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Doctor Strange": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Elio": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "F1 The Movie": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Fantastická zvířata - Brumbálova tajemství": {
  //   year: 2022,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Fantastická zvířata - Grindelwaldovy zločiny": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Fantastická zvířata a kde je najít": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Faunův labyrint": {
  //   year: 2006,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Fear Below": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Final Destination - Bloodlines": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Gentlemani": {
  //   year: 2019,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Ghost Rider": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Ghost Rider 2": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hacker": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Fénixův řád": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Kámen mudrců": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Ohnivý pohár": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Princ dvojí krve": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Relikvie smrti - část druhá": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Relikvie smrti - část první": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Tajemná komnata": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Harry Potter a Vězeň z Azkabanu": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hell of a Summer": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hellboy The Crooked Man": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Heretic": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hitman": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hlavy státu": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hledá se Nemo": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hobit - Bitva pěti armád": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hobit - Neočekávaná cesta": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hobit - Šmakova dračí poušť": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Hon na čarodějnice": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Inferno": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Iron Man": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Iron Man 2": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Iron Man 3": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Já legenda - alternativní konec": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Já robot": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Jak vycvičit draka": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Jason Bourne": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Jedna ruka netleská": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Jeníček a Mařenka - Lovci čarodějnic": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "John Wick": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Jumper": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Kazatel": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Koralína a svět za tajnými dveřmi": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Král Artuš - Legenda o meči": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Let's Dance": {
  //   year: 2006,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Locked": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Logan": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Matrix": {
  //   year: 1999,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Matrix 2 - Reloaded": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Matrix 3 - Revolutions": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Mickey 17": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Missing": {
  //   year: 2023,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Mlčení jehňátek": {
  //   year: 1991,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Monstrum": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Mrtvá nevěsta Tima Burtona": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Můj policista": {
  //   year: 2022,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Muži v černém": {
  //   year: 1997,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Na plech": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Nerve - Hra o život": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Neuvěřitelný Hulk": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Next": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Než jsem tě poznala": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Nezlomní": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Nezvratný osud": {
  //   year: 2000,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Nezvratný osud 2": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Nikdo": {
  //   year: 2021,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Nosferatu": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Novocaine": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Občanská válka": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pán prstenů - Dvě věže": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pán prstenů - Návrat krále": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pán prstenů - Společenstvo prstenu": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pařba na třetí": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pařba v Bangkoku": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pařba ve Vegas": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Párty Hárd": {
  //   year: 2019,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Párty Hárder": {
  //   year: 2022,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Percy Jackson - Zloděj blesku": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Percy Jackson 2 - Moře nestvůr": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Počátek": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Poslední lovec čarodějnic": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pravá blondýnka": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Prci prci prcičky": {
  //   year: 1999,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Prci prci prcičky 2": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Prci prci prcičky 3 - Svatba": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Prci prci prcičky 8 - Školní sraz": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Příběh žraloka": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Profile": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Pulp Fiction - Historky z podsvětí": {
  //   year: 1994,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Ready Player One": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Roboti": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Rogue One Star Wars Story": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Roklina": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Rychle a zběsile": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Rychle a zběsile 3 - Tokijská jízda": {
  //   year: 2006,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Scary Movie": {
  //   year: 2000,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Scary Movie 2": {
  //   year: 2001,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Scary Movie 3": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Scary Movie 4": {
  //   year: 2006,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Scary Movie 5": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Searching": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Seznamte se Joe Black": {
  //   year: 1998,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Sherlock Holmes - Hra stínů": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Sherlock Holmes": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Sinners": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Skautův průvodce zombie apokalypsou": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Skin": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Sleeping Dogs": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Snowden": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Solo Star Wars Story": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Souboj Titánů": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man - Bez domova": {
  //   year: 2021,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man - Homecoming": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man - Napříč paralelními světy": {
  //   year: 2023,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man - Paralelní světy": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man 2": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Spider-Man 3": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 1 - Skrytá hrozba": {
  //   year: 1999,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 2 - Klony útočí": {
  //   year: 2002,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 3 - Pomsta Sithů": {
  //   year: 2005,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 4 - Nová naděje": {
  //   year: 1977,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 5 - Imperium vrací úder": {
  //   year: 1980,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 6 - Návrat Jediho": {
  //   year: 1983,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 7 - Síla se probouzí": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 8 - Poslední z Jediů": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Star Wars - Epizoda 9 - Vzestup Skywalkera": {
  //   year: 2019,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Strážci": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Superbad": {
  //   year: 2007,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Superman": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Surfař": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Tajemství jezera Caddo": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Tajemství loňského léta": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Temný rytíř": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Temný rytíř povstal": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Ten co tě sleduje": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Tenet": {
  //   year: 2020,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Terminator - Salvation": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "The Amateur": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "The Avengers - Age of Ultron": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "The Avengers 1": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "The Cloverfield Paradox": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "The Den": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "The LEGO Batman Movie": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Thor": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Thor 2 - Temný svět": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Thor 3 - Ragnarok": {
  //   year: 2017,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Thor 4 - Láska jako hrom": {
  //   year: 2022,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Thunderbolts": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Toy Story - Příběh hraček": {
  //   year: 1995,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Tron Legacy": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Twilight Sága - Nový Měsíc": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Twilight Sága - Rozbřesk 1 část": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Twilight sága - Rozbřesk 2 část": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Twilight Sága - Stmívání": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Twilight Sága - Zatmění": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Twisters": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Tým na hraně": {
  //   year: 2010,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Underworld": {
  //   year: 2003,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Underworld 2 - Evolution": {
  //   year: 2006,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Underworld 3 - Vzpoura Lycanů": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Underworld 4 - Probuzení": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Underworld 5 - Krvavé války": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Unfriend": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Until Dawn": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Úžasňákovi": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "V Bruggách": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "V hlavě": {
  //   year: 2015,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "V hlavě 2": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "V zajetí démonů": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "V zajetí démonů 2": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Vampýrská akademie": {
  //   year: 2014,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Van Helsing": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Včelař": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Ve stínu": {
  //   year: 2012,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Venom": {
  //   year: 2018,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Vlk z Wall Street": {
  //   year: 2013,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Volný pád": {
  //   year: 1993,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Vrána": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Warcraft - První střet": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Wicked": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Working Man": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "X-Men Origins - Wolverine": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zahulíme, uvidíme": {
  //   year: 2004,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zahulíme, uvidíme 2": {
  //   year: 2008,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zahulíme, uvidíme 3": {
  //   year: 2011,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zápisník alkoholičky": {
  //   year: 2024,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zhasni a zemřeš": {
  //   year: 2016,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zombieland": {
  //   year: 2009,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zombieland 2 - Double Tap": {
  //   year: 2019,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
  // "Zúčtování 2": {
  //   year: 2025,
  //   review: "",
  //   genre: "",
  //   poster: "",
  //   length: ""
  // },
} satisfies Record<string, MovieData>