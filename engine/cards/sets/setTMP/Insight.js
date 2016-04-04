"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InsightBase = require("../set6ED/Insight.js");

class Insight extends InsightBase {
  constructor(game) {
    super(game, "Insight", "Tempest", "TMP");
  }
}

module.exports = Insight;
