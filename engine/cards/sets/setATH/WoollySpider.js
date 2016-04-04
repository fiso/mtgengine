"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoollySpider extends Card {
  constructor(game) {
    super(game, "Woolly Spider", "Anthologies", "ATH");
  }
}

module.exports = WoollySpider;
