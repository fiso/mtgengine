"use strict";
const Constants = require ("../../../Constants");
const PalladiumMyrBase = require("../setCM2/PalladiumMyr");

class PalladiumMyr extends PalladiumMyrBase {
  constructor (game) {
    super(game, "Palladium Myr", "Iconic Masters", "IMA");
  }
}

module.exports = PalladiumMyr;
