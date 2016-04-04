"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtchedOracleBase = require("../set5DN/EtchedOracle.js");

class EtchedOracle extends EtchedOracleBase {
  constructor(game) {
    super(game, "Etched Oracle", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EtchedOracle;
