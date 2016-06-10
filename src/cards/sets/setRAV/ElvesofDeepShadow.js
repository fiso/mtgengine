"use strict";
const Constants = require ("../../../Constants");
const ElvesofDeepShadowBase = require("../setDDJ/ElvesofDeepShadow");

class ElvesofDeepShadow extends ElvesofDeepShadowBase {
  constructor (game) {
    super(game, "Elves of Deep Shadow", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ElvesofDeepShadow;
