const dotenv = require('dotenv').config();

const translation = require('./translate/translation');
const c = require('./decide/count-words');
const scraping = require('./decide/look-for-matches');
const scrap = require('./find-data/scrapC');
const sanitize = require('./find-data/sanitizer');
const cl = require('./cleanFiles');

// call every function in order they nedd to be called in order

//1) //My Data
//call my titles from blog
//get my last 100 articles titles
//scraping.makeRequest();
//Clean the titles
//sanitize.cleanFilesMy();

///////////////////////////////////
//2) //grab data from wordpress by REST api or from article
//for Wordpress sites
//scrap.fucnReqW()
//for Cheerio
//scrap.funcReqC();

/////////////////////////////////////
//3) // then call sanitizer function depends where you grbbed the data from
//for Wordpress
//sanitize.cleanFilesW();
//for Cheerio
//sanitize.cleanFilesC();

/////////////////////////////////////////
// 4) //translate the file eaither from wordpress REST api or from article
//for Wordpress
//translation.grabFilesW();
//for Cheerio
//translation.grabFilesC();

///////////////////////////////////////////////
//5)//post articles from wordpress or single article
//for Wordpress
//c.callW();
//for Cheerio
//c.callC();

////////////////////////////////////
//6) // clean all folders wordpress or single article
//for Wordpress
//cl.cleanFilesW();
//for Cheerio
//cl.cleanFilesC();
