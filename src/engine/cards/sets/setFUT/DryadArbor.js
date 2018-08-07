"use strict";
const Constants = require ("../../../Constants");
const DryadArborBase = require("../setV12/DryadArbor");

class DryadArbor extends DryadArborBase {
  constructor (game) {
    super(game, "Dryad Arbor", "Future Sight", "FUT");
  }
}

module.exports = DryadArbor;
