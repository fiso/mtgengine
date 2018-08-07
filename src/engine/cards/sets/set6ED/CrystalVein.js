"use strict";
const Constants = require ("../../../Constants");
const CrystalVeinBase = require("../setCMA/CrystalVein");

class CrystalVein extends CrystalVeinBase {
  constructor (game) {
    super(game, "Crystal Vein", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CrystalVein;
