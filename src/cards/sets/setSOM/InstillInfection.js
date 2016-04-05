"use strict";
const Constants = require ("../../../Constants");
const InstillInfectionBase = require("../setMM2/InstillInfection");

class InstillInfection extends InstillInfectionBase {
  constructor(game) {
    super(game, "Instill Infection", "Scars of Mirrodin", "SOM");
  }
}

module.exports = InstillInfection;
