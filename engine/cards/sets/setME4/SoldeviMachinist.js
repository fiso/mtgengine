"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoldeviMachinistBase = require("../setICE/SoldeviMachinist.js");

class SoldeviMachinist extends SoldeviMachinistBase {
  constructor(game) {
    super(game, "Soldevi Machinist", "Masters Edition IV", "ME4");
  }
}

module.exports = SoldeviMachinist;
