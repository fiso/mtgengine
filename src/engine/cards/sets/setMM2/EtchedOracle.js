"use strict";
const Constants = require ("../../../Constants");
const EtchedOracleBase = require("../setC16/EtchedOracle");

class EtchedOracle extends EtchedOracleBase {
  constructor (game) {
    super(game, "Etched Oracle", "Modern Masters 2015", "MM2");
  }
}

module.exports = EtchedOracle;
