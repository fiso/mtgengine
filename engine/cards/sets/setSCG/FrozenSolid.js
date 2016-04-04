"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrozenSolidBase = require("../setCSP/FrozenSolid.js");

class FrozenSolid extends FrozenSolidBase {
  constructor(game) {
    super(game, "Frozen Solid", "Scourge", "SCG");
  }
}

module.exports = FrozenSolid;
