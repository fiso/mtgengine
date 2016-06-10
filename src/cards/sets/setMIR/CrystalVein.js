"use strict";
const Constants = require ("../../../Constants");
const CrystalVeinBase = require("../set6ED/CrystalVein");

class CrystalVein extends CrystalVeinBase {
  constructor (game) {
    super(game, "Crystal Vein", "Mirage", "MIR");
  }
}

module.exports = CrystalVein;
