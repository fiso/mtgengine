"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredArmory extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacred Armory", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SacredArmory;
