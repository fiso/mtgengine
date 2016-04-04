"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OraclesInsight extends Card {
  constructor(game) {
    super(game, "Oracle's Insight", "Born of the Gods", "BNG");
  }
}

module.exports = OraclesInsight;
