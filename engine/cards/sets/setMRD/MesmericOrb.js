"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesmericOrb extends UnimplementedCard {
  constructor(game) {
    super(game, "Mesmeric Orb", "Mirrodin", "MRD");
  }
}

module.exports = MesmericOrb;
