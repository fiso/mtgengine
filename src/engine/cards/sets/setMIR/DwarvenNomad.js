"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenNomad extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Nomad", "Mirage", "MIR");
  }
}

module.exports = DwarvenNomad;
