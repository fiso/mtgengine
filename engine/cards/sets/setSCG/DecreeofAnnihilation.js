"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DecreeofAnnihilationBase = require("../setV14/DecreeofAnnihilation.js");

class DecreeofAnnihilation extends DecreeofAnnihilationBase {
  constructor(game) {
    super(game, "Decree of Annihilation", "Scourge", "SCG");
  }
}

module.exports = DecreeofAnnihilation;
