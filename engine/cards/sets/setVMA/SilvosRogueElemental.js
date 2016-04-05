"use strict";
const Constants = require ("../../../Constants");
const SilvosRogueElementalBase = require("../setONS/SilvosRogueElemental");

class SilvosRogueElemental extends SilvosRogueElementalBase {
  constructor(game) {
    super(game, "Silvos, Rogue Elemental", "Vintage Masters", "VMA");
  }
}

module.exports = SilvosRogueElemental;
