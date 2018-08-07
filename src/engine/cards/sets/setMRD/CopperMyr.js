"use strict";
const Constants = require ("../../../Constants");
const CopperMyrBase = require("../setSOM/CopperMyr");

class CopperMyr extends CopperMyrBase {
  constructor (game) {
    super(game, "Copper Myr", "Mirrodin", "MRD");
  }
}

module.exports = CopperMyr;
