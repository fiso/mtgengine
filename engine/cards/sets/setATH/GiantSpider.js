"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantSpider extends Card {
  constructor(game) {
    super(game, "Giant Spider", "Anthologies", "ATH");
  }
}

module.exports = GiantSpider;
