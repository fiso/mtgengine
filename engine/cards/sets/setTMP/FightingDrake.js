"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FightingDrakeBase = require("../set8ED/FightingDrake.js");

class FightingDrake extends FightingDrakeBase {
  constructor(game) {
    super(game, "Fighting Drake", "Tempest", "TMP");
  }
}

module.exports = FightingDrake;
