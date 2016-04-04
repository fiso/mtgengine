"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopySpider extends Card {
  constructor(game) {
    super(game, "Canopy Spider", "Anthologies", "ATH");
  }
}

module.exports = CanopySpider;
