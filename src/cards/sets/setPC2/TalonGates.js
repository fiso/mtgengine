"use strict";
const Constants = require ("../../../Constants");
const TalonGatesBase = require("../setPCA/TalonGates");

class TalonGates extends TalonGatesBase {
  constructor (game) {
    super(game, "Talon Gates", "Planechase 2012", "PC2");
  }
}

module.exports = TalonGates;
