"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TelimTor extends UnimplementedCard {
  constructor (game) {
    super(game, "Telim'Tor", "Mirage", "MIR");
  }
}

module.exports = TelimTor;
