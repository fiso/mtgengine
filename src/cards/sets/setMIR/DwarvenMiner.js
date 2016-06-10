"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenMiner extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Miner", "Mirage", "MIR");
  }
}

module.exports = DwarvenMiner;
