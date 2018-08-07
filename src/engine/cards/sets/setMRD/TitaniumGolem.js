"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitaniumGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Titanium Golem", "Mirrodin", "MRD");
  }
}

module.exports = TitaniumGolem;
