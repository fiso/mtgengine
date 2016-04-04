"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalachiteGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Malachite Golem", "Mirrodin", "MRD");
  }
}

module.exports = MalachiteGolem;
