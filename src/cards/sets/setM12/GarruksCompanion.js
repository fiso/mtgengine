"use strict";
const Constants = require ("../../../Constants");
const GarruksCompanionBase = require("../setM11/GarruksCompanion");

class GarruksCompanion extends GarruksCompanionBase {
  constructor(game) {
    super(game, "Garruk's Companion", "Magic 2012", "M12");
  }
}

module.exports = GarruksCompanion;
