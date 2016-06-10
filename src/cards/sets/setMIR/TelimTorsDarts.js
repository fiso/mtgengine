"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TelimTorsDarts extends UnimplementedCard {
  constructor (game) {
    super(game, "Telim'Tor's Darts", "Mirage", "MIR");
  }
}

module.exports = TelimTorsDarts;
