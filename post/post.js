var WPAPI = require('wpapi');

const calTag = require('./algoTag');
const calCat = require('./algoCat');
const calImg = require('./algoImg');
const urlBlog = process.env.MY_URL;
console.log(urlBlog);

const randomArray = [
 
];

exports.articleBody = (arrayFinal, article) => {
  const res = article.toString();

  let art = res.replace(/[']/g, "'");
  art = res.split('.');

  const t = art[0];

  let title = t.split(' ').slice(0, 15).join(' ') + ' ...';

  const artToPublish = article.replace(/[.]/g, '. \n');

  const re = calTag.calculateTag(arrayFinal);

  const tagN = [re[0] ? re[0] : 98];

  const ct = calCat.calculateCat(arrayFinal);
  const catN = [ct[0] ? ct[0] : 1];

  const imgN = calImg.calculateImg(arrayFinal);
  const im = imgN.length > 1 ? imgN[1] : imgN[0];

  const num = [];
  if (imgN.length === 0) {
    const rNum = Math.floor(Math.random() * 84) + 1;
    num.push(randomArray[rNum]);
  }

  const wp = new WPAPI({
    endpoint: `${urlBlog}/wp-json`,
    username: process.env.USER,
    password: process.env.PASSWORD
  });

  wp.posts()
    .create({
      title,
      content: artToPublish,
      featured_media: im ? im : num[0],
      categories: catN,
      tags: tagN,
      status: 'publish'
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
