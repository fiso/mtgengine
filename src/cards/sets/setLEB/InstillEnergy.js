"use strict";
const Constants = require ("../../../Constants");
const InstillEnergyBase = require("../setCED/InstillEnergy");

class InstillEnergy extends InstillEnergyBase {
  constructor (game) {
    super(game, "Instill Energy", "Limited Edition Beta", "LEB");
  }
}

module.exports = InstillEnergy;
