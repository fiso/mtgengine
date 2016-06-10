"use strict";
const Constants = require ("../../../Constants");
const BenthicBehemothBase = require("../set7ED/BenthicBehemoth");

class BenthicBehemoth extends BenthicBehemothBase {
  constructor (game) {
    super(game, "Benthic Behemoth", "Tempest", "TMP");
  }
}

module.exports = BenthicBehemoth;
