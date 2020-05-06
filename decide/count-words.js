const fs = require('fs');

const art = require('../post/post');

let file;
const recursionW = c => {
  if (c === 100) {
    return;
  }
  setTimeout(
    function (c) {
      c = c || 0;

      file = fs.readFileSync(`./tradus/html-${c++}.txt`, 'utf8');

      const wordsArray = splitByWords(file);
      const wordsMap = createWordMap(wordsArray);
      const finalWordsArray = sortByCount(wordsMap);

      const res = finalWordsArray.sort((a, b) => {
        return b.name.length - a.name.length;
      });

      const arraySliced = res.slice(0, 30);

      const arraySort = arraySliced.sort((a, b) => {
        return b.total - a.total;
      });

      const arrayFinal = arraySort.filter(e => {
        return e.total > 2;
      });

      art.articleBody(arrayFinal, file);

      function splitByWords(file) {
        // split string by spaces (including spaces, tabs, and newlines)
        const wordsArray = file.split(/\s+/);
        return wordsArray;
      }

      function createWordMap(wordsArray) {
        // create map for word counts
        const wordsMap = {};

        wordsArray.forEach(key => {
          if (wordsMap.hasOwnProperty(key)) {
            wordsMap[key]++;
          } else {
            wordsMap[key] = 1;
          }
        });

        return wordsMap;
      }

      function sortByCount(wordsMap) {
        // sort by count in descending order
        let finalWordsArray = [];
        finalWordsArray = Object.keys(wordsMap).map(function (key) {
          return {
            name: key,
            total: wordsMap[key]
          };
        });

        finalWordsArray.sort(function (a, b) {
          return b.total - a.total;
        });

        return finalWordsArray;
      }

      recursionW(c);
    },
    1000,
    c
  );
};

exports.callW = () => {
  recursionW();
};

const recursionC = () => {
  file = fs.readFileSync(`./cheerioText/text-tradus.txt`, 'utf8');

  if (!file) {
    c++;
  }

  const wordsArray = splitByWords(file);
  const wordsMap = createWordMap(wordsArray);
  const finalWordsArray = sortByCount(wordsMap);

  const res = finalWordsArray.sort((a, b) => {
    return b.name.length - a.name.length;
  });

  const arraySliced = res.slice(0, 30);

  const arraySort = arraySliced.sort((a, b) => {
    return b.total - a.total;
  });

  const arrayFinal = arraySort.filter(e => {
    return e.total > 2;
  });

  art.articleBody(arrayFinal, file);

  function splitByWords(file) {
    // split string by spaces (including spaces, tabs, and newlines)
    const wordsArray = file.split(/\s+/);
    return wordsArray;
  }

  function createWordMap(wordsArray) {
    // create map for word counts
    const wordsMap = {};

    wordsArray.forEach(key => {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
    });

    return wordsMap;
  }

  function sortByCount(wordsMap) {
    // sort by count in descending order
    let finalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(function (key) {
      return {
        name: key,
        total: wordsMap[key]
      };
    });

    finalWordsArray.sort(function (a, b) {
      return b.total - a.total;
    });

    return finalWordsArray;
  }
};

exports.callC = () => {
  recursionC();
};
