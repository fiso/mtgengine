"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoundReflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Wound Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = WoundReflection;
