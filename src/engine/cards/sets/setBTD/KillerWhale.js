"use strict";
const Constants = require ("../../../Constants");
const KillerWhaleBase = require("../setTPR/KillerWhale");

class KillerWhale extends KillerWhaleBase {
  constructor (game) {
    super(game, "Killer Whale", "Beatdown Box Set", "BTD");
  }
}

module.exports = KillerWhale;
