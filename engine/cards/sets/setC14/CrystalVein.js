"use strict";
const Constants = require ("../../../Constants");
const CrystalVeinBase = require("../set6ED/CrystalVein");

class CrystalVein extends CrystalVeinBase {
  constructor(game) {
    super(game, "Crystal Vein", "Commander 2014", "C14");
  }
}

module.exports = CrystalVein;
