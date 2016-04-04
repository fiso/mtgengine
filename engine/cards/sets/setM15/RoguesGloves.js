"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoguesGloves extends Card {
  constructor(game) {
    super(game, "Rogue's Gloves", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RoguesGloves;
