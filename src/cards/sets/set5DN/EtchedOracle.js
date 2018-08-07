"use strict";
const Constants = require ("../../../Constants");
const EtchedOracleBase = require("../setC16/EtchedOracle");

class EtchedOracle extends EtchedOracleBase {
  constructor (game) {
    super(game, "Etched Oracle", "Fifth Dawn", "5DN");
  }
}

module.exports = EtchedOracle;
