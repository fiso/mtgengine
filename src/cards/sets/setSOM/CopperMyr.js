"use strict";
const Constants = require ("../../../Constants");
const CopperMyrBase = require("../setMRD/CopperMyr");

class CopperMyr extends CopperMyrBase {
  constructor (game) {
    super(game, "Copper Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CopperMyr;
