"use strict";
const Constants = require ("../../../Constants");
const SoldeviMachinistBase = require("../setME4/SoldeviMachinist");

class SoldeviMachinist extends SoldeviMachinistBase {
  constructor (game) {
    super(game, "Soldevi Machinist", "Ice Age", "ICE");
  }
}

module.exports = SoldeviMachinist;
