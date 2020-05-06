const fetch = require('node-fetch');
const fs = require('fs');

const myUrl = process.env.MY_URL;

// this file extratcs my last 100 titles to my-articles folder
exports.makeRequest = async () => {
  const posts = await fetch(`${myUrl}/wp-json/wp/v2/posts/?per_page=100`);

  let json = await posts.json();
  console.log(json);

  json.forEach(post => {
    const log = fs.createWriteStream(`./my-articles/html-t.txt`, {
      flags: 'a'
    });
    try {
      log.write(`,'${post.title.rendered}'\n`);
    } catch (error) {
      console.error(error);
    }
  });
};
