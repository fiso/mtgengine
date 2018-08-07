"use strict";
const Constants = require ("../../../Constants");
const InstillEnergyBase = require("../setME4/InstillEnergy");

class InstillEnergy extends InstillEnergyBase {
  constructor (game) {
    super(game, "Instill Energy", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = InstillEnergy;
