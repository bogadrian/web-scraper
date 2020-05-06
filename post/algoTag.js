const tag1 = 'cambiamenti';
const tag2 = 'cittadinanza';
const tag3 = 'disastri';
const tag4 = 'economia';
const tag5 = 'serra';
const tag6 = 'ghiacciai';
const tag7 = 'immigrati';
const tag8 = 'mare';
const tag9 = 'inondazioni';
const tag10 = 'inquinamento';
const tag11 = 'migranti';
const tag12 = 'caldo';
const tag13 = 'politica';
const tag14 = 'popolazione';
const tag15 = 'rifugiati';
const tag16 = 'riscaldamento';
const tag17 = 'siccità';
const tag18 = 'estremo';
const tag19 = 'uragani';
const tag20 = 'internazionale';
const tag21 = 'ambiente';
const tag22 = 'rinnovabili';
const tag23 = 'petrolifero';
const tag24 = 'rallentamento';
const tag25 = 'cooperazione';
const tag26 = 'pianificazione';
const tag27 = 'combustibili';
const tag28 = 'impatto';
const tag29 = 'disuguaglianza';
const tag30 = 'organizazzioni';
const tag31 = 'coronavirus';

const arrayTag = [
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
  tag7,
  tag8,
  tag9,
  tag10,
  tag11,
  tag12,
  tag13,
  tag14,
  tag15,
  tag16,
  tag17,
  tag18,
  tag19,
  tag20,
  tag21,
  tag22,
  tag23,
  tag24,
  tag25,
  tag26,
  tag27,
  tag28,
  tag29,
  tag30,
  tag31
];

mapTag = {
  cambiamenti: 60,
  cittadinanza: 63,
  disastri: 76,
  economia: 68,
  serra: 79,
  ghiacciai: 71,
  immigrati: 59,
  mare: 64,
  inondazioni: 69,
  inquinamento: 67,
  migranti: 61,
  caldo: 66,
  politica: 72,
  popolazione: 84,
  rifugiati: 62,
  riscaldamento: 77,
  siccità: 78,
  estremo: 80,
  uragani: 65,
  internazionale: 85,
  ambiente: 86,
  rinnovabili: 87,
  petrolifero: 88,
  rallentamento: 89,
  cooperazione: 90,
  pianificazion: 91,
  combustibili: 92,
  impatto: 93,
  disuguaglianz: 94,
  organizazzioni: 95,
  coronavirus: 96
};

exports.calculateTag = arrayFromArticle => {
  const objMap = {};

  let num = [];

  arrayTag.forEach(e1 =>
    arrayFromArticle.forEach(e2 => {
      const e3 = e2.name.split(/[']/g);
      const e4 = !e3[1] ? e2.name : e3[1];
      if (e1.toLowerCase().trim() === e4.toLowerCase().trim()) {
        objMap[e1] = objMap[e1] + 1 || 1;
      }
    })
  );

  const arr = Object.keys(objMap).map(e => e);

  for (let key in mapTag) {
    arr.forEach(e => {
      if (key === e) {
        num.push(mapTag[key]);
      }
    });
  }
  return num;
};
