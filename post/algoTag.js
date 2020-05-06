

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
