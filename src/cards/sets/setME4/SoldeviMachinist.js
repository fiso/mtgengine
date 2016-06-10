"use strict";
const Constants = require ("../../../Constants");
const SoldeviMachinistBase = require("../setICE/SoldeviMachinist");

class SoldeviMachinist extends SoldeviMachinistBase {
  constructor (game) {
    super(game, "Soldevi Machinist", "Masters Edition IV", "ME4");
  }
}

module.exports = SoldeviMachinist;
