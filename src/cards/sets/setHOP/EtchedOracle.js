"use strict";
const Constants = require ("../../../Constants");
const EtchedOracleBase = require("../set5DN/EtchedOracle");

class EtchedOracle extends EtchedOracleBase {
  constructor (game) {
    super(game, "Etched Oracle", "Planechase", "HOP");
  }
}

module.exports = EtchedOracle;
