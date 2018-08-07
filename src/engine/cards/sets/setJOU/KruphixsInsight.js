"use strict";
const Constants = require ("../../../Constants");
const KruphixsInsightBase = require("../setC18/KruphixsInsight");

class KruphixsInsight extends KruphixsInsightBase {
  constructor (game) {
    super(game, "Kruphix's Insight", "Journey into Nyx", "JOU");
  }
}

module.exports = KruphixsInsight;
