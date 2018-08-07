"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Rise of the Eldrazi Tokens", "TROE");
  }
}

module.exports = Elemental;
