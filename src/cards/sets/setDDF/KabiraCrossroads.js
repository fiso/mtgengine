"use strict";
const Constants = require ("../../../Constants");
const KabiraCrossroadsBase = require("../setC17/KabiraCrossroads");

class KabiraCrossroads extends KabiraCrossroadsBase {
  constructor (game) {
    super(game, "Kabira Crossroads", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KabiraCrossroads;
