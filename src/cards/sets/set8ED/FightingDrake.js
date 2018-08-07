"use strict";
const Constants = require ("../../../Constants");
const FightingDrakeBase = require("../setTPR/FightingDrake");

class FightingDrake extends FightingDrakeBase {
  constructor (game) {
    super(game, "Fighting Drake", "Eighth Edition", "8ED");
  }
}

module.exports = FightingDrake;
