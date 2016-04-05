"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaReflection extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = ManaReflection;
