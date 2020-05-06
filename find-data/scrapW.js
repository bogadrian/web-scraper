const fetch = require('node-fetch');
const fs = require('fs');
const dotenv = require('dotenv').config();

const url = process.env.URL;

exports.funcReqW = async () => {
  const posts = await fetch(`${url}/wp-json/wp/v2/posts/?per_page=100`);

  let json = await posts.json();

  json.forEach((post, i) => {
    for (let j = 0; j < 100; j++) {
      if (i === j) {
        try {
          fs.writeFileSync(`./texts/html-${i}.txt`, post.title.rendered, () => {
            console.log('Done it!');
          });

          fs.writeFileSync(
            `./texts/html-${i}.txt`,
            post.content.rendered,
            () => {
              console.log('Done it!');
            }
          );
        } catch (error) {
          console.error(error);
        }
      }
    }
  });
};
