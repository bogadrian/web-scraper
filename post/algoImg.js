const img1 = 'cambiamenti';
const img2 = 'cittadinanza';
const img3 = 'disastri';
const img4 = 'economia';
const img5 = 'serra';
const img6 = 'ghiacciai';
const img7 = 'immigrati';
const img8 = 'mare';
const img9 = 'inondazioni';
const img10 = 'inquinamento';
const img11 = 'migranti';
const img12 = 'caldo';
const img13 = 'politica';
const img14 = 'popolazione';
const img15 = 'rifugiati';
const img16 = 'riscaldamento';
const img17 = 'siccità';
const img18 = 'estremo';
const img19 = 'uragani';
const img20 = 'internazionale';
const img21 = 'ambiente';
const img22 = 'rinnovabili';
const img23 = 'petrolifero';
const img24 = 'rallentamento';
const img25 = 'cooperazione';
const img26 = 'pianificazione';
const img27 = 'combustibili';
const img28 = 'impatto';
const img29 = 'disuguaglianza';
const img30 = 'organizazzioni';
const img31 = 'coronavirus';
const img32 = 'giovani';
const img33 = 'greta';
const img34 = 'antartide';
const img35 = 'animali';
const img36 = 'ricchi';
const img37 = 'amazonia';
const img38 = 'prostituzione';
const img39 = 'folla';
const img40 = 'città';
const img41 = 'aria';
const img42 = 'ratti';
const img43 = 'razzisti';
const img44 = 'oceani';
const img45 = 'vino';
const img46 = 'riscaldamento';
const img47 = 'inalzamanto';
const img48 = 'raffredamento';
const img49 = 'profughi';
const img50 = 'fame';
const img51 = 'veganismo';
const img52 = 'follia';
const img53 = 'ecologica';
const img54 = 'ambientali';
const img55 = 'immigranti';
const img56 = 'naturali';
const img57 = 'veleno';
const img58 = 'clima';
const img59 = 'incendi';
const img60 = 'globale';
const img61 = 'conflitti';
const img62 = 'muro';
const img63 = 'meteo';
const img64 = 'fine';
const img65 = 'uragano';
const img66 = 'africa';
const img67 = 'asilo';
const img68 = 'terra';
const img69 = 'insetti';
const img70 = 'nubbi';
const img71 = 'scienza';
const img72 = 'morti';
const img73 = 'migrazioni';
const img74 = 'plastica';
const img75 = 'temperatura';
const img76 = 'metano';
const img77 = 'api';
const img78 = 'america';
const img79 = 'europa';
const img80 = 'asia';
const img81 = 'alberi';
const img82 = 'malattie';
const img83 = 'deserto';
const img84 = 'turismo';

const arrayImg = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  img62,
  img63,
  img64,
  img65,
  img66,
  img67,
  img68,
  img69,
  img70,
  img71,
  img72,
  img73,
  img74,
  img75,
  img76,
  img77,
  img78,
  img79,
  img80,
  img81,
  img82,
  img83,
  img84
];

const mapImg = {
  cambiamenti: 1614,
  cittadinanza: 1732,
  disastri: 1613,
  economia: 2175,
  serra: 2139,
  ghiacciai: 2190,
  immigrati: 2219,
  mare: 2390,
  inondazioni: 1728,
  inquinamento: 1785,
  migranti: 2161,
  caldo: 2112,
  politica: 2059,
  popolazione: 2197,
  rifugiati: 2066,
  riscaldamento: 2178,
  siccità: 2203,
  estremo: 2056,
  uragani: 1999,
  internazionale: 2265,
  ambiente: 2381,
  rinnovabili: 1814,
  petrolifero: 2038,
  rallentamento: 2017,
  cooperazione: 2013,
  pianificazione: 1988,
  combustibili: 1753,
  impatto: 1756,
  disuguaglianze: 1760,
  organizazzioni: 1714,
  coronavirus: 2435,
  giovani: 2387,
  greta: 2377,
  antartide: 2371,
  animali: 2350,
  ricchi: 2347,
  amazonia: 2318,
  prostituzione: 2311,
  folla: 2308,
  città: 2302,
  aria: 2299,
  ratti: 2292,
  razzisti: 2277,
  oceani: 2274,
  vino: 2269,
  riscaldamento: 2261,
  inalzamanto: 2253,
  raffredamento: 2247,
  profughi: 2240,
  fame: 2237,
  veganismo: 2234,
  follia: 2231,
  ecologica: 2228,
  ambientali: 2216,
  immigranti: 2210,
  naturali: 2207,
  veleno: 2200,
  clima: 2194,
  incendi: 2182,
  globale: 2168,
  conflitti: 2151,
  muro: 2148,
  meteo: 2145,
  fine: 2142,
  uragano: 2125,
  africa: 2122,
  asilo: 2119,
  terra: 2112,
  insetti: 2107,
  nubbi: 2069,
  scienza: 2048,
  morti: 2041,
  migrazioni: 2032,
  plastica: 2017,
  temperatura: 2002,
  metano: 2038,
  api: 2026,
  america: 1833,
  europa: 1828,
  asia: 1820,
  alberi: 1790,
  malattie: 1782,
  deserto: 1742,
  turismo: 1450
};

exports.calculateImg = arrayFromArticle => {
  const objMap = {};

  let num = [];

  arrayImg.forEach(e1 =>
    arrayFromArticle.forEach(e2 => {
      const e3 = e2.name.split(/[']/g);
      const e4 = !e3[1] ? e2.name : e3[1];
      if (e1.toLowerCase().trim() === e4.toLowerCase().trim()) {
        objMap[e1] = objMap[e1] + 1 || 1;
      }
    })
  );

  const arr = Object.keys(objMap).map(e => e);

  for (let key in mapImg) {
    arr.forEach(e => {
      if (key === e) {
        num.push(mapImg[key]);
      }
    });
  }

  return num;
};
