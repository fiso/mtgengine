"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PenumbraSpider extends Card {
  constructor(game) {
    super(game, "Penumbra Spider", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PenumbraSpider;
