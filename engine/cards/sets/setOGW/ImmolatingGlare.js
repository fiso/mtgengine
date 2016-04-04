"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmolatingGlare extends Card {
  constructor(game) {
    super(game, "Immolating Glare", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ImmolatingGlare;
