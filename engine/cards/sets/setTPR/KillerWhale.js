"use strict";
const Constants = require ("../../../Constants");
const KillerWhaleBase = require("../setBTD/KillerWhale");

class KillerWhale extends KillerWhaleBase {
  constructor(game) {
    super(game, "Killer Whale", "Tempest Remastered", "TPR");
  }
}

module.exports = KillerWhale;
