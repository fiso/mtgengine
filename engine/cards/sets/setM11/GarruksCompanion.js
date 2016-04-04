"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GarruksCompanion extends Card {
  constructor(game) {
    super(game, "Garruk's Companion", "Magic 2011", "M11");
  }
}

module.exports = GarruksCompanion;
