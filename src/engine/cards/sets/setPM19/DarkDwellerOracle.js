"use strict";
const Constants = require ("../../../Constants");
const DarkDwellerOracleBase = require("../setM19/DarkDwellerOracle");

class DarkDwellerOracle extends DarkDwellerOracleBase {
  constructor (game) {
    super(game, "Dark-Dweller Oracle", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = DarkDwellerOracle;
