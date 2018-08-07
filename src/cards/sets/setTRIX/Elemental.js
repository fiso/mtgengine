"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Rivals of Ixalan Tokens", "TRIX");
  }
}

module.exports = Elemental;
