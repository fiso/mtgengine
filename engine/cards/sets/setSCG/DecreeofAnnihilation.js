"use strict";
const Constants = require ("../../../Constants");
const DecreeofAnnihilationBase = require("../setV14/DecreeofAnnihilation");

class DecreeofAnnihilation extends DecreeofAnnihilationBase {
  constructor(game) {
    super(game, "Decree of Annihilation", "Scourge", "SCG");
  }
}

module.exports = DecreeofAnnihilation;
