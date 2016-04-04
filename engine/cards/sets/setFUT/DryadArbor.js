"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DryadArborBase = require("../setV12/DryadArbor.js");

class DryadArbor extends DryadArborBase {
  constructor(game) {
    super(game, "Dryad Arbor", "Future Sight", "FUT");
  }
}

module.exports = DryadArbor;
