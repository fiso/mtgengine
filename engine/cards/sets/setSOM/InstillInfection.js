"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InstillInfectionBase = require("../setMM2/InstillInfection.js");

class InstillInfection extends InstillInfectionBase {
  constructor(game) {
    super(game, "Instill Infection", "Scars of Mirrodin", "SOM");
  }
}

module.exports = InstillInfection;
