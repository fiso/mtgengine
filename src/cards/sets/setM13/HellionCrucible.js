"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellionCrucible extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellion Crucible", "Magic 2013", "M13");
  }
}

module.exports = HellionCrucible;
