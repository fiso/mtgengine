"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalonGates extends UnimplementedCard {
  constructor(game) {
    super(game, "Talon Gates", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TalonGates;
