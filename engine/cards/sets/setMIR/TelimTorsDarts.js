"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TelimTorsDarts extends Card {
  constructor(game) {
    super(game, "Telim'Tor's Darts", "Mirage", "MIR");
  }
}

module.exports = TelimTorsDarts;
