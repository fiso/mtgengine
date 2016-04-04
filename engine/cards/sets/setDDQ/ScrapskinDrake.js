"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrapskinDrakeBase = require("../setAVR/ScrapskinDrake.js");

class ScrapskinDrake extends ScrapskinDrakeBase {
  constructor(game) {
    super(game, "Scrapskin Drake", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ScrapskinDrake;
