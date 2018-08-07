"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruksCompanion extends UnimplementedCard {
  constructor (game) {
    super(game, "Garruk's Companion", "Magic 2012", "M12");
  }
}

module.exports = GarruksCompanion;
