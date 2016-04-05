"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoonReflection extends UnimplementedCard {
  constructor(game) {
    super(game, "Boon Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = BoonReflection;
