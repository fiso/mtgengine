"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PureReflection extends Card {
  constructor(game) {
    super(game, "Pure Reflection", "Invasion", "INV");
  }
}

module.exports = PureReflection;
