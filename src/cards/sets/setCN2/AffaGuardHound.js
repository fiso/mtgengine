"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AffaGuardHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Affa Guard Hound", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = AffaGuardHound;
