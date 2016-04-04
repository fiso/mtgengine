"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathPulse extends Card {
  constructor(game) {
    super(game, "Death Pulse", "Onslaught", "ONS");
  }
}

module.exports = DeathPulse;
