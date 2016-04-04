"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PincerSpider extends Card {
  constructor(game) {
    super(game, "Pincer Spider", "Invasion", "INV");
  }
}

module.exports = PincerSpider;
