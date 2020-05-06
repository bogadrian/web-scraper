//Clean the folders
const fs = require('fs');

//clean files after 18 hours since it started (10 minutes each article 100 articles is about 16.30 minutes)
exports.cleanFilesW = () => {
  console.log('Cleaning ...');

  for (let j = 0; j < 100; j++) {
    fs.unlink(`./texts/html-${j}.txt`, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('files removerd');
    });
    fs.unlink(`./tradus/html-${j}.txt`, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('files removerd');
    });
  }
};

exports.cleanFilesC = () => {
  console.log('Cleaning ...');

  fs.unlink(`./cheerioText/text-tradus.txt`, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('files removerd');
  });
  fs.unlink(`./cheeriotext/html.txt`, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('files removerd');
  });
};
