"use strict";
const Constants = require ("../../../Constants");
const KorDuelistBase = require("../setMM2/KorDuelist");

class KorDuelist extends KorDuelistBase {
  constructor(game) {
    super(game, "Kor Duelist", "WPN and Gateway", "pWPN");
  }
}

module.exports = KorDuelist;
