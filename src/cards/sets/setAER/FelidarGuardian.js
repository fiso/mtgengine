"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FelidarGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Felidar Guardian", "Aether Revolt", "AER");
  }
}

module.exports = FelidarGuardian;
