"use strict";
const Constants = require ("../../../Constants");
const DwarvenMinerBase = require("../setWC98/DwarvenMiner");

class DwarvenMiner extends DwarvenMinerBase {
  constructor (game) {
    super(game, "Dwarven Miner", "Mirage", "MIR");
  }
}

module.exports = DwarvenMiner;
