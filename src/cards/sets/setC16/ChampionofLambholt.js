"use strict";
const Constants = require ("../../../Constants");
const ChampionofLambholtBase = require("../setCM2/ChampionofLambholt");

class ChampionofLambholt extends ChampionofLambholtBase {
  constructor (game) {
    super(game, "Champion of Lambholt", "Commander 2016", "C16");
  }
}

module.exports = ChampionofLambholt;
