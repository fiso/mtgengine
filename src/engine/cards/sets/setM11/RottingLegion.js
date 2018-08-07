"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottingLegion extends UnimplementedCard {
  constructor (game) {
    super(game, "Rotting Legion", "Magic 2011", "M11");
  }
}

module.exports = RottingLegion;
