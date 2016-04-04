"use strict";
const Constants = require ("../../../Constants");
const InsightBase = require("../set6ED/Insight");

class Insight extends InsightBase {
  constructor(game) {
    super(game, "Insight", "Tempest", "TMP");
  }
}

module.exports = Insight;
