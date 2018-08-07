"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Oath of the Gatewatch Tokens", "TOGW");
  }
}

module.exports = Elemental;
