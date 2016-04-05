"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruksCompanion extends UnimplementedCard {
  constructor(game) {
    super(game, "Garruk's Companion", "Magic 2011", "M11");
  }
}

module.exports = GarruksCompanion;
