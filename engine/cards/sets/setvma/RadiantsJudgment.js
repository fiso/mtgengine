"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RadiantsJudgmentBase = require("../setULG/RadiantsJudgment.js");

class RadiantsJudgment extends RadiantsJudgmentBase {
  constructor(game) {
    super(game, "Radiant's Judgment", "Vintage Masters", "VMA");
  }
}

module.exports = RadiantsJudgment;
