"use strict";
const Constants = require ("../../../Constants");
const FightingDrakeBase = require("../setTPR/FightingDrake");

class FightingDrake extends FightingDrakeBase {
  constructor (game) {
    super(game, "Fighting Drake", "Tempest", "TMP");
  }
}

module.exports = FightingDrake;
