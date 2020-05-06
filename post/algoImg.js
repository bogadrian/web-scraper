


const arrayImg = [
  
];

const mapImg = {

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
