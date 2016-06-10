"use strict";
const Constants = require ("../../../Constants");
const FightingDrakeBase = require("../set8ED/FightingDrake");

class FightingDrake extends FightingDrakeBase {
  constructor (game) {
    super(game, "Fighting Drake", "Tempest", "TMP");
  }
}

module.exports = FightingDrake;
