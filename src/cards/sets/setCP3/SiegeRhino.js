"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeRhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege Rhino", "Magic Origins Clash Pack", "CP3");
  }
}

module.exports = SiegeRhino;
