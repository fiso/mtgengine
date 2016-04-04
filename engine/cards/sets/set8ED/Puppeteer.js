"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Puppeteer extends Card {
  constructor(game) {
    super(game, "Puppeteer", "Eighth Edition", "8ED");
  }
}

module.exports = Puppeteer;
