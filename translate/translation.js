const dotenv = require('dotenv').config();
const fs = require('fs');

const projectId = 'transit-276212';
const location = 'global';
//Imports the Google Cloud Translation library
const { TranslationServiceClient } = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

exports.grabFilesW = () => {
  for (let j = 0; j < 100; j++) {
    try {
      const text = fs.readFileSync(`./texts/html-${j}.txt`, 'utf8');

      const translateText = async () => {
        // Construct request
        const request = {
          parent: `projects/${projectId}/locations/${location}`,
          contents: [text],
          mimeType: 'text/plain', // mime types: text/plain, text/html
          sourceLanguageCode: 'en',
          targetLanguageCode: 'it'
        };

        try {
          // Run request
          const [response] = await translationClient.translateText(request);

          for (const translation of response.translations) {
            const log = fs.createWriteStream(`./tradus/html-${j}.txt`, {
              flags: 'a'
            });
            try {
              log.write(`'${translation.translatedText}'\n`);
            } catch (error) {
              console.error(error);
            }
          }
        } catch (error) {
          console.error(error.details);
        }
      };
      translateText();
    } catch (err) {
      console.error(err);
    }
  }
};

exports.grabFilesC = () => {
  try {
    const text = fs.readFileSync(`./cheerioText/html.txt`, 'utf8');

    const translateText = async () => {
      // Construct request
      const request = {
        parent: `projects/${projectId}/locations/${location}`,
        contents: [text],
        mimeType: 'text/plain', // mime types: text/plain, text/html
        sourceLanguageCode: 'en',
        targetLanguageCode: 'it'
      };

      try {
        // Run request
        const [response] = await translationClient.translateText(request);

        for (const translation of response.translations) {
          const log = fs.createWriteStream(`./cheerioText/text-tradus.txt`, {
            flags: 'a'
          });
          try {
            log.write(`'${translation.translatedText}'\n`);
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error(error.details);
      }
    };
    translateText();
  } catch (err) {
    console.error(err);
  }
};
