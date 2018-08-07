"use strict";
const Constants = require ("../../../Constants");
const PuppeteerCliqueBase = require("../setC17/PuppeteerClique");

class PuppeteerClique extends PuppeteerCliqueBase {
  constructor (game) {
    super(game, "Puppeteer Clique", "Shadowmoor", "SHM");
  }
}

module.exports = PuppeteerClique;
