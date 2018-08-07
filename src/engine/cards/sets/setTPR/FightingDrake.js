"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FightingDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Fighting Drake", "Tempest Remastered", "TPR");
  }
}

module.exports = FightingDrake;
