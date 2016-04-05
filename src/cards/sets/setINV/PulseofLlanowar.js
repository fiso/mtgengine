"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulseofLlanowar extends UnimplementedCard {
  constructor(game) {
    super(game, "Pulse of Llanowar", "Invasion", "INV");
  }
}

module.exports = PulseofLlanowar;
