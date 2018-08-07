"use strict";
const Constants = require ("../../../Constants");
const FathomFleetCaptainBase = require("../setXLN/FathomFleetCaptain");

class FathomFleetCaptain extends FathomFleetCaptainBase {
  constructor (game) {
    super(game, "Fathom Fleet Captain", "Ixalan Promos", "PXLN");
  }
}

module.exports = FathomFleetCaptain;
