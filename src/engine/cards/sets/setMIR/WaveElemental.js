"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Wave Elemental", "Mirage", "MIR");
  }
}

module.exports = WaveElemental;
