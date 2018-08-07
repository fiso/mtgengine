"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StabWound extends UnimplementedCard {
  constructor (game) {
    super(game, "Stab Wound", "Magic 2015", "M15");
  }
}

module.exports = StabWound;
