"use strict";
const Constants = require ("../../../Constants");
const ElementalBondBase = require("../setC17/ElementalBond");

class ElementalBond extends ElementalBondBase {
  constructor (game) {
    super(game, "Elemental Bond", "Magic Origins", "ORI");
  }
}

module.exports = ElementalBond;
