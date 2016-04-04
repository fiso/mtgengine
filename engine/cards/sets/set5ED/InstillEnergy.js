"use strict";
const Constants = require ("../../../Constants");
const InstillEnergyBase = require("../setCED/InstillEnergy");

class InstillEnergy extends InstillEnergyBase {
  constructor(game) {
    super(game, "Instill Energy", "Fifth Edition", "5ED");
  }
}

module.exports = InstillEnergy;
