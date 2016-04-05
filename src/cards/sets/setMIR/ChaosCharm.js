"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Chaos Charm", "Mirage", "MIR");
  }
}

module.exports = ChaosCharm;
