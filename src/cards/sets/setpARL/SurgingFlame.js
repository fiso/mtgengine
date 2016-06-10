"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgingFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Surging Flame", "Arena League", "pARL");
  }
}

module.exports = SurgingFlame;
