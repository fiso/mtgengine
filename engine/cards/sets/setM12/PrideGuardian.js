"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrideGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Pride Guardian", "Magic 2012", "M12");
  }
}

module.exports = PrideGuardian;
