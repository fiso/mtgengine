"use strict";
const Constants = require ("../../../Constants");
const OraclesInsightBase = require("../setBBD/OraclesInsight");

class OraclesInsight extends OraclesInsightBase {
  constructor (game) {
    super(game, "Oracle's Insight", "Born of the Gods", "BNG");
  }
}

module.exports = OraclesInsight;
