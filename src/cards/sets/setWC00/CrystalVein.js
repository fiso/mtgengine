"use strict";
const Constants = require ("../../../Constants");
const CrystalVeinBase = require("../setCMA/CrystalVein");

class CrystalVein extends CrystalVeinBase {
  constructor (game) {
    super(game, "Crystal Vein", "World Championship Decks 2000", "WC00");
  }
}

module.exports = CrystalVein;
