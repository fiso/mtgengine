"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OmegaMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Omega Myr", "Mirrodin", "MRD");
  }
}

module.exports = OmegaMyr;
