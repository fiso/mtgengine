"use strict";
const Constants = require ("../../../Constants");
const GarruksCompanionBase = require("../setM12/GarruksCompanion");

class GarruksCompanion extends GarruksCompanionBase {
  constructor (game) {
    super(game, "Garruk's Companion", "Magic 2011", "M11");
  }
}

module.exports = GarruksCompanion;
