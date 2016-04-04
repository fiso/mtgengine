"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellionCrucible extends Card {
  constructor(game) {
    super(game, "Hellion Crucible", "Magic 2013", "M13");
  }
}

module.exports = HellionCrucible;
