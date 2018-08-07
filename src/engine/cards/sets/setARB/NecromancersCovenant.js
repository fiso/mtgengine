"use strict";
const Constants = require ("../../../Constants");
const NecromancersCovenantBase = require("../setC15/NecromancersCovenant");

class NecromancersCovenant extends NecromancersCovenantBase {
  constructor (game) {
    super(game, "Necromancer's Covenant", "Alara Reborn", "ARB");
  }
}

module.exports = NecromancersCovenant;
