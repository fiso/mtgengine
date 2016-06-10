"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PureReflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Pure Reflection", "Invasion", "INV");
  }
}

module.exports = PureReflection;
