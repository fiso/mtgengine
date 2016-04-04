"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenthicBehemothBase = require("../set7ED/BenthicBehemoth.js");

class BenthicBehemoth extends BenthicBehemothBase {
  constructor(game) {
    super(game, "Benthic Behemoth", "Tempest", "TMP");
  }
}

module.exports = BenthicBehemoth;
