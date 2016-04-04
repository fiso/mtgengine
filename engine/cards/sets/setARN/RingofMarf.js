"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofMarf extends Card {
  constructor(game) {
    super(game, "Ring of Ma'rûf", "Arabian Nights", "ARN");
  }
}

module.exports = RingofMarf;
