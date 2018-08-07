"use strict";
const Constants = require ("../../../Constants");
const KillerWhaleBase = require("../setTPR/KillerWhale");

class KillerWhale extends KillerWhaleBase {
  constructor (game) {
    super(game, "Killer Whale", "Exodus", "EXO");
  }
}

module.exports = KillerWhale;
