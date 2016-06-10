"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Sand Golem", "Mirage", "MIR");
  }
}

module.exports = SandGolem;
