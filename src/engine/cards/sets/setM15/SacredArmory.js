"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredArmory extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Armory", "Magic 2015", "M15");
  }
}

module.exports = SacredArmory;
