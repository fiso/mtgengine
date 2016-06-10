"use strict";
const Constants = require ("../../../Constants");
const TrapEssenceBase = require("../setKTK/TrapEssence");

class TrapEssence extends TrapEssenceBase {
  constructor (game) {
    super(game, "Trap Essence", "Prerelease Events", "pPRE");
  }
}

module.exports = TrapEssence;
