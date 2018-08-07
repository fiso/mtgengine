"use strict";
const Constants = require ("../../../Constants");
const KarnScionofUrzaBase = require("../setDOM/KarnScionofUrza");

class KarnScionofUrza extends KarnScionofUrzaBase {
  constructor (game) {
    super(game, "Karn, Scion of Urza", "Dominaria Promos", "PDOM");
  }
}

module.exports = KarnScionofUrza;
