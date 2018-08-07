"use strict";
const Constants = require ("../../../Constants");
const CraterhoofBehemothBase = require("../setMM3/CraterhoofBehemoth");

class CraterhoofBehemoth extends CraterhoofBehemothBase {
  constructor (game) {
    super(game, "Craterhoof Behemoth", "Avacyn Restored", "AVR");
  }
}

module.exports = CraterhoofBehemoth;
