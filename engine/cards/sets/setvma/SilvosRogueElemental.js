"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilvosRogueElementalBase = require("../setONS/SilvosRogueElemental.js");

class SilvosRogueElemental extends SilvosRogueElementalBase {
  constructor(game) {
    super(game, "Silvos, Rogue Elemental", "Vintage Masters", "VMA");
  }
}

module.exports = SilvosRogueElemental;
