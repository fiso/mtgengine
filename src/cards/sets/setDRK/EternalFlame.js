"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Flame", "The Dark", "DRK");
  }
}

module.exports = EternalFlame;
