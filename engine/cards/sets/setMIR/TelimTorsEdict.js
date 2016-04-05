"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TelimTorsEdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Telim'Tor's Edict", "Mirage", "MIR");
  }
}

module.exports = TelimTorsEdict;
