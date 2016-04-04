"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkDragon extends Card {
  constructor(game) {
    super(game, "Clockwork Dragon", "Mirrodin", "MRD");
  }
}

module.exports = ClockworkDragon;
