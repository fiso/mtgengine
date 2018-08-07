"use strict";
const Constants = require ("../../../Constants");
const MidnightRitualBase = require("../set10E/MidnightRitual");

class MidnightRitual extends MidnightRitualBase {
  constructor (game) {
    super(game, "Midnight Ritual", "Mercadian Masques", "MMQ");
  }
}

module.exports = MidnightRitual;
