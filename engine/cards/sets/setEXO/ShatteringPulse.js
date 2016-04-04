"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShatteringPulse extends Card {
  constructor(game) {
    super(game, "Shattering Pulse", "Exodus", "EXO");
  }
}

module.exports = ShatteringPulse;
