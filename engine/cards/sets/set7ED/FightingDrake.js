"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FightingDrakeBase = require("../set8ED/FightingDrake.js");

class FightingDrake extends FightingDrakeBase {
  constructor(game) {
    super(game, "Fighting Drake", "Seventh Edition", "7ED");
  }
}

module.exports = FightingDrake;
