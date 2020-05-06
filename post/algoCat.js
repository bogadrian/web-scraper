const cat1 = 'Africa';
const cat2 = 'America';
const cat3 = 'Asia';
const cat4 = 'News';
const cat5 = 'Scienza';
const cat6 = 'Effetti';
const cat7 = 'Previsioni';
const cat8 = 'Sapevi';
const cat9 = 'Europa';

const arrayCat = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];

mapCat = {
  Africa: 2,
  America: 8,
  Asia: 7,
  News: 1,
  Scienza: 6,
  Effetti: 40,
  Previsioni: 42,
  Sapevi: 44,
  Europa: 38
};

exports.calculateCat = arrayFromArticle => {
  const objMap = {};

  let num = [];

  arrayCat.forEach(e1 =>
    arrayFromArticle.forEach(e2 => {
      const e3 = e2.name.split(/[']/g);
      const e4 = !e3[1] ? e2.name : e3[1];
      if (e1.toLowerCase().trim() === e4.toLowerCase().trim()) {
        objMap[e1] = objMap[e1] + 1 || 1;
      }
    })
  );

  const arr = Object.keys(objMap).map(e => e);

  for (let key in mapCat) {
    arr.forEach(e => {
      if (key === e) {
        num.push(mapCat[key]);
      }
    });
  }
  return num;
};
