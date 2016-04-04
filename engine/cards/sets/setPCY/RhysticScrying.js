"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticScrying extends Card {
  constructor(game) {
    super(game, "Rhystic Scrying", "Prophecy", "PCY");
  }
}

module.exports = RhysticScrying;
