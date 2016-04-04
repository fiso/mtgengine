"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenNomad extends Card {
  constructor(game) {
    super(game, "Dwarven Nomad", "Mirage", "MIR");
  }
}

module.exports = DwarvenNomad;
