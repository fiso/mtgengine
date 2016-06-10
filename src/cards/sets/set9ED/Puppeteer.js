"use strict";
const Constants = require ("../../../Constants");
const PuppeteerBase = require("../set8ED/Puppeteer");

class Puppeteer extends PuppeteerBase {
  constructor (game) {
    super(game, "Puppeteer", "Ninth Edition", "9ED");
  }
}

module.exports = Puppeteer;
