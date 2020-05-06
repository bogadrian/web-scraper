const request = require('request');

const fs = require('fs');
const cheerio = require('cheerio');

const url = '.. the url of article here';

exports.funcReqC = () => {
  request(url, (error, response, html) => {
    const $ = cheerio.load(html);

    const title = $('h1');
    const body = $('p');

    const buf1 = Buffer.from(title.text());
    const buf2 = Buffer.from(body.text());

    try {
      fs.writeFileSync(`./cheerioText/html.txt`, buf1, () => {
        console.log('Done it!');
      });
      fs.writeFileSync(`./cheerioText/html.txt`, buf2, () => {
        console.log('Done it!');
      });
    } catch (err) {
      console.log(err);
    }
  });
};
