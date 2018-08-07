"use strict";
const Constants = require ("../../../Constants");
const FellFlagshipBase = require("../setXLN/FellFlagship");

class FellFlagship extends FellFlagshipBase {
  constructor (game) {
    super(game, "Fell Flagship", "Ixalan Promos", "PXLN");
  }
}

module.exports = FellFlagship;
