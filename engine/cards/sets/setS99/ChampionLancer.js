"use strict";
const Constants = require ("../../../Constants");
const ChampionLancerBase = require("../setME4/ChampionLancer");

class ChampionLancer extends ChampionLancerBase {
  constructor(game) {
    super(game, "Champion Lancer", "Starter 1999", "S99");
  }
}

module.exports = ChampionLancer;
