"use strict";
const Constants = require ("../../../Constants");
const ChampionofLambholtBase = require("../setCM2/ChampionofLambholt");

class ChampionofLambholt extends ChampionofLambholtBase {
  constructor (game) {
    super(game, "Champion of Lambholt", "Avacyn Restored", "AVR");
  }
}

module.exports = ChampionofLambholt;
