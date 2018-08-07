"use strict";
const Constants = require ("../../../Constants");
const RampagingFerocidonBase = require("../setXLN/RampagingFerocidon");

class RampagingFerocidon extends RampagingFerocidonBase {
  constructor (game) {
    super(game, "Rampaging Ferocidon", "Ixalan Promos", "PXLN");
  }
}

module.exports = RampagingFerocidon;
