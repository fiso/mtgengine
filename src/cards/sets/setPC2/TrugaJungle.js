"use strict";
const Constants = require ("../../../Constants");
const TrugaJungleBase = require("../setPCA/TrugaJungle");

class TrugaJungle extends TrugaJungleBase {
  constructor (game) {
    super(game, "Truga Jungle", "Planechase 2012", "PC2");
  }
}

module.exports = TrugaJungle;
