var sanitizeHtml = require('sanitize-html');
const fs = require('fs');

// this file sanitize the entries
exports.cleanFilesW = () => {
  for (let j = 0; j < 100; j++) {
    fs.readFile(`./texts/html-${j}.txt`, 'utf8', (err, text) => {
      let clean = sanitizeHtml(text);

      clean = sanitizeHtml(text, {
        allowedTags: [],
        allowedAttributes: []
      });

      try {
        fs.writeFileSync(`./texts/html-${j}.txt`, clean, () => {
          console.log('Done it!');
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
};

exports.cleanFilesC = () => {
  for (let j = 0; j < 100; j++) {
    fs.readFile('./cheerioText/html.txt', 'utf8', (err, text) => {
      let clean = sanitizeHtml(text);

      clean = sanitizeHtml(text, {
        allowedTags: [],
        allowedAttributes: []
      });

      try {
        fs.writeFileSync('./cheerioText/html.txt', clean, () => {
          console.log('Done it!');
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
};
exports.cleanFilesMy = () => {
  for (let j = 0; j < 100; j++) {
    fs.readFile('./my-articles/html-t.txt', 'utf8', (err, text) => {
      let clean = sanitizeHtml(text);

      clean = sanitizeHtml(text, {
        allowedTags: [],
        allowedAttributes: []
      });

      try {
        fs.writeFileSync('./my-articles/html-t.txt', clean, () => {
          console.log('Done it!');
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
};
