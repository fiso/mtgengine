"use strict";
const Constants = require ("../../../Constants");
const ManaLeakBase = require("../setpARL/ManaLeak");

class ManaLeak extends ManaLeakBase {
  constructor (game) {
    super(game, "Mana Leak", "Magic 2012", "M12");
  }
}

module.exports = ManaLeak;
