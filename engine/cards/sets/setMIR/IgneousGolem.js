"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgneousGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Igneous Golem", "Mirage", "MIR");
  }
}

module.exports = IgneousGolem;
