"use strict";
const Constants = require ("../../../Constants");
const ElvesofDeepShadowBase = require("../setDDJ/ElvesofDeepShadow");

class ElvesofDeepShadow extends ElvesofDeepShadowBase {
  constructor (game) {
    super(game, "Elves of Deep Shadow", "Friday Night Magic 2006", "F06");
  }
}

module.exports = ElvesofDeepShadow;
