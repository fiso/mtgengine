"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AggressiveMining extends Card {
  constructor(game) {
    super(game, "Aggressive Mining", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AggressiveMining;
