"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PillarofFlame extends Card {
  constructor(game) {
    super(game, "Pillar of Flame", "Avacyn Restored", "AVR");
  }
}

module.exports = PillarofFlame;
