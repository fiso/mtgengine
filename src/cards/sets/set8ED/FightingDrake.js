"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FightingDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Fighting Drake", "Eighth Edition", "8ED");
  }
}

module.exports = FightingDrake;
