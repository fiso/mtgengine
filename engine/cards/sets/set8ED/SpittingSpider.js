"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingSpider extends Card {
  constructor(game) {
    super(game, "Spitting Spider", "Eighth Edition", "8ED");
  }
}

module.exports = SpittingSpider;
