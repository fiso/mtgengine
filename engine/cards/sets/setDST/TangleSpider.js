"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TangleSpider extends Card {
  constructor(game) {
    super(game, "Tangle Spider", "Darksteel", "DST");
  }
}

module.exports = TangleSpider;
