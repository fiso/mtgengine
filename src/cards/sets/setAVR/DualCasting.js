"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DualCasting extends UnimplementedCard {
  constructor(game) {
    super(game, "Dual Casting", "Avacyn Restored", "AVR");
  }
}

module.exports = DualCasting;
