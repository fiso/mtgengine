"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraverobberSpider extends Card {
  constructor(game) {
    super(game, "Graverobber Spider", "Born of the Gods", "BNG");
  }
}

module.exports = GraverobberSpider;
