"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RyuseitheFallingStar extends Card {
  constructor(game) {
    super(game, "Ryusei, the Falling Star", "Archenemy", "ARC");
  }
}

module.exports = RyuseitheFallingStar;
