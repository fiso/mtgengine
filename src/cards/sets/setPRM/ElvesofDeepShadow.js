"use strict";
const Constants = require ("../../../Constants");
const ElvesofDeepShadowBase = require("../setDDJ/ElvesofDeepShadow");

class ElvesofDeepShadow extends ElvesofDeepShadowBase {
  constructor (game) {
    super(game, "Elves of Deep Shadow", "Magic Online Promos", "PRM");
  }
}

module.exports = ElvesofDeepShadow;
