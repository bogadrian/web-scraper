var WPAPI = require('wpapi');

const calTag = require('./algoTag');
const calCat = require('./algoCat');
const calImg = require('./algoImg');
const urlBlog = process.env.MY_URL;
console.log(urlBlog);

const randomArray = [
  1614,
  1732,
  1613,
  2175,
  2139,
  2190,
  2219,
  2390,
  1728,
  1785,
  2161,
  2112,
  2059,
  2197,
  2066,
  2178,
  2203,
  2056,
  1999,
  2265,
  2381,
  1814,
  2038,
  2017,
  2013,
  1988,
  1753,
  1756,
  1760,
  1714,
  2435,
  2387,
  2377,
  2371,
  2350,
  2347,
  2318,
  2311,
  2308,
  2302,
  2299,
  2292,
  2277,
  2274,
  2269,
  2261,
  2253,
  2247,
  2240,
  2237,
  2234,
  2231,
  2228,
  2216,
  2210,
  2207,
  2200,
  2194,
  2182,
  2168,
  2151,
  2148,
  2145,
  2142,
  2125,
  2122,
  2119,
  2112,
  2107,
  2069,
  2048,
  2041,
  2032,
  2017,
  2002,
  2038,
  2026,
  1833,
  1828,
  1820,
  1790,
  1782,
  1742,
  1450
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
