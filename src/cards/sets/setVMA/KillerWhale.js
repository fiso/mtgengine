"use strict";
const Constants = require ("../../../Constants");
const KillerWhaleBase = require("../setBTD/KillerWhale");

class KillerWhale extends KillerWhaleBase {
  constructor (game) {
    super(game, "Killer Whale", "Vintage Masters", "VMA");
  }
}

module.exports = KillerWhale;
