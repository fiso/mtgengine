"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SehtsTiger extends Card {
  constructor(game) {
    super(game, "Seht's Tiger", "Future Sight", "FUT");
  }
}

module.exports = SehtsTiger;
