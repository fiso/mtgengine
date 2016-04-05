"use strict";
const Constants = require ("../../../Constants");
const MidnightRitualBase = require("../setMMQ/MidnightRitual");

class MidnightRitual extends MidnightRitualBase {
  constructor(game) {
    super(game, "Midnight Ritual", "Tenth Edition", "10E");
  }
}

module.exports = MidnightRitual;
