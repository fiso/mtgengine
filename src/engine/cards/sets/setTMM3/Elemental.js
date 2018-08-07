"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Elemental;
