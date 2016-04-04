"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonShadow extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragon Shadow", "Scourge", "SCG");
  }
}

module.exports = DragonShadow;
