


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
