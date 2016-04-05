"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Decomposition extends UnimplementedCard {
  constructor(game) {
    super(game, "Decomposition", "Mirage", "MIR");
  }
}

module.exports = Decomposition;
