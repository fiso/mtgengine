"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Energy Bolt", "Mirage", "MIR");
  }
}

module.exports = EnergyBolt;
