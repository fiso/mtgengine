"use strict";
const Constants = require ("../../../Constants");
const CopperCarapaceBase = require("../setMM2/CopperCarapace");

class CopperCarapace extends CopperCarapaceBase {
  constructor (game) {
    super(game, "Copper Carapace", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CopperCarapace;
