"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PuppeteerCliqueBase = require("../setMM2/PuppeteerClique.js");

class PuppeteerClique extends PuppeteerCliqueBase {
  constructor(game) {
    super(game, "Puppeteer Clique", "Shadowmoor", "SHM");
  }
}

module.exports = PuppeteerClique;
