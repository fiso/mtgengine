"use strict";
const Constants = require ("../../../Constants");
const KazarovSengirPurebloodBase = require("../setDOM/KazarovSengirPureblood");

class KazarovSengirPureblood extends KazarovSengirPurebloodBase {
  constructor (game) {
    super(game, "Kazarov, Sengir Pureblood", "Dominaria Promos", "PDOM");
  }
}

module.exports = KazarovSengirPureblood;
