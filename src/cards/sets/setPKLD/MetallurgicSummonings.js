"use strict";
const Constants = require ("../../../Constants");
const MetallurgicSummoningsBase = require("../setKLD/MetallurgicSummonings");

class MetallurgicSummonings extends MetallurgicSummoningsBase {
  constructor (game) {
    super(game, "Metallurgic Summonings", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MetallurgicSummonings;
