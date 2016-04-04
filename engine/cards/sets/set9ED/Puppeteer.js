"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PuppeteerBase = require("../set8ED/Puppeteer.js");

class Puppeteer extends PuppeteerBase {
  constructor(game) {
    super(game, "Puppeteer", "Ninth Edition", "9ED");
  }
}

module.exports = Puppeteer;
