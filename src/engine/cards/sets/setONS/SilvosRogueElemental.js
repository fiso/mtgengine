"use strict";
const Constants = require ("../../../Constants");
const SilvosRogueElementalBase = require("../setEMA/SilvosRogueElemental");

class SilvosRogueElemental extends SilvosRogueElementalBase {
  constructor (game) {
    super(game, "Silvos, Rogue Elemental", "Onslaught", "ONS");
  }
}

module.exports = SilvosRogueElemental;
