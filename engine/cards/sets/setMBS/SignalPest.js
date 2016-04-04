"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SignalPest extends Card {
  constructor(game) {
    super(game, "Signal Pest", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SignalPest;
