"use strict";
const Constants = require ("../../../Constants");
const StoicRebuttalBase = require("../setMM2/StoicRebuttal");

class StoicRebuttal extends StoicRebuttalBase {
  constructor (game) {
    super(game, "Stoic Rebuttal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = StoicRebuttal;
