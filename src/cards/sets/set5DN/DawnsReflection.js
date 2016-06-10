"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnsReflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawn's Reflection", "Fifth Dawn", "5DN");
  }
}

module.exports = DawnsReflection;
