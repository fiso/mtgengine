"use strict";
const Constants = require ("../../../Constants");
const RevelinRichesBase = require("../setXLN/RevelinRiches");

class RevelinRiches extends RevelinRichesBase {
  constructor (game) {
    super(game, "Revel in Riches", "Ixalan Promos", "PXLN");
  }
}

module.exports = RevelinRiches;
