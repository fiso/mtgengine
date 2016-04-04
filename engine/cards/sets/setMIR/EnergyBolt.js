"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyBolt extends Card {
  constructor(game) {
    super(game, "Energy Bolt", "Mirage", "MIR");
  }
}

module.exports = EnergyBolt;
