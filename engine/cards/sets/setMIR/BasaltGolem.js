"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasaltGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Basalt Golem", "Mirage", "MIR");
  }
}

module.exports = BasaltGolem;
