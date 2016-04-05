"use strict";
const Constants = require ("../../../Constants");
const PuppeteerBase = require("../set8ED/Puppeteer");

class Puppeteer extends PuppeteerBase {
  constructor(game) {
    super(game, "Puppeteer", "Odyssey", "ODY");
  }
}

module.exports = Puppeteer;
