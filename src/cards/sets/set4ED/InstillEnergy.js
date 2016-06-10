"use strict";
const Constants = require ("../../../Constants");
const InstillEnergyBase = require("../setCED/InstillEnergy");

class InstillEnergy extends InstillEnergyBase {
  constructor (game) {
    super(game, "Instill Energy", "Fourth Edition", "4ED");
  }
}

module.exports = InstillEnergy;
