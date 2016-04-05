"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhysticScrying extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhystic Scrying", "Prophecy", "PCY");
  }
}

module.exports = RhysticScrying;
