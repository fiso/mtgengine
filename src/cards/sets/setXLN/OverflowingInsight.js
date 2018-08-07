"use strict";
const Constants = require ("../../../Constants");
const OverflowingInsightBase = require("../setMTGA/OverflowingInsight");

class OverflowingInsight extends OverflowingInsightBase {
  constructor (game) {
    super(game, "Overflowing Insight", "Ixalan", "XLN");
  }
}

module.exports = OverflowingInsight;
