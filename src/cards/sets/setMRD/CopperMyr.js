"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Copper Myr", "Mirrodin", "MRD");
  }
}

module.exports = CopperMyr;
