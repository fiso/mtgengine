"use strict";
const Constants = require ("../../../Constants");
const PalladiumMyrBase = require("../setC14/PalladiumMyr");

class PalladiumMyr extends PalladiumMyrBase {
  constructor(game) {
    super(game, "Palladium Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PalladiumMyr;
