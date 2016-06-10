"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianShieldBearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Shield-Bearer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GuardianShieldBearer;
