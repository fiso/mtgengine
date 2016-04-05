"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaVapors extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Vapors", "Prophecy", "PCY");
  }
}

module.exports = ManaVapors;
