"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TelimTorsEdict extends Card {
  constructor(game) {
    super(game, "Telim'Tor's Edict", "Mirage", "MIR");
  }
}

module.exports = TelimTorsEdict;
