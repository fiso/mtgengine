"use strict";
const Constants = require ("../../../Constants");
const PuppeteerBase = require("../set10E/Puppeteer");

class Puppeteer extends PuppeteerBase {
  constructor (game) {
    super(game, "Puppeteer", "Eighth Edition", "8ED");
  }
}

module.exports = Puppeteer;
