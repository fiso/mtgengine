"use strict";
const Constants = require ("../../../Constants");
const SeafloorOracleBase = require("../setPRIX/SeafloorOracle");

class SeafloorOracle extends SeafloorOracleBase {
  constructor (game) {
    super(game, "Seafloor Oracle", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SeafloorOracle;
