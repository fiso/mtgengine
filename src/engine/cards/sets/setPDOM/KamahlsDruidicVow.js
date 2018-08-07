"use strict";
const Constants = require ("../../../Constants");
const KamahlsDruidicVowBase = require("../setDOM/KamahlsDruidicVow");

class KamahlsDruidicVow extends KamahlsDruidicVowBase {
  constructor (game) {
    super(game, "Kamahl's Druidic Vow", "Dominaria Promos", "PDOM");
  }
}

module.exports = KamahlsDruidicVow;
