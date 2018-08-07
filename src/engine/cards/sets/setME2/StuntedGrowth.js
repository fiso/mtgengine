"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StuntedGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Stunted Growth", "Masters Edition II", "ME2");
  }
}

module.exports = StuntedGrowth;
