"use strict";
const Constants = require ("../../../Constants");
const FrozenSolidBase = require("../setCSP/FrozenSolid");

class FrozenSolid extends FrozenSolidBase {
  constructor(game) {
    super(game, "Frozen Solid", "Scourge", "SCG");
  }
}

module.exports = FrozenSolid;
