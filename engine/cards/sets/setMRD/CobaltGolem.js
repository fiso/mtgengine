"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CobaltGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Cobalt Golem", "Mirrodin", "MRD");
  }
}

module.exports = CobaltGolem;
