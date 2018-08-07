"use strict";
const Constants = require ("../../../Constants");
const UginsInsightBase = require("../setBFZ/UginsInsight");

class UginsInsight extends UginsInsightBase {
  constructor (game) {
    super(game, "Ugin's Insight", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = UginsInsight;
