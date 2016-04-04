"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessedSpirits extends Card {
  constructor(game) {
    super(game, "Blessed Spirits", "Magic Origins", "ORI");
  }
}

module.exports = BlessedSpirits;
