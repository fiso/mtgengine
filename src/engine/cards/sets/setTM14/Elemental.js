"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Magic 2014 Tokens", "TM14");
  }
}

module.exports = Elemental;
