"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenMiner extends Card {
  constructor(game) {
    super(game, "Dwarven Miner", "Mirage", "MIR");
  }
}

module.exports = DwarvenMiner;
