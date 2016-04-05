"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LethalVapors extends UnimplementedCard {
  constructor(game) {
    super(game, "Lethal Vapors", "Scourge", "SCG");
  }
}

module.exports = LethalVapors;
