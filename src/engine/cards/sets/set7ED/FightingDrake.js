"use strict";
const Constants = require ("../../../Constants");
const FightingDrakeBase = require("../setTPR/FightingDrake");

class FightingDrake extends FightingDrakeBase {
  constructor (game) {
    super(game, "Fighting Drake", "Seventh Edition", "7ED");
  }
}

module.exports = FightingDrake;
