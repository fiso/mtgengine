"use strict";
const Constants = require ("../../../Constants");
const NecromancersCovenantBase = require("../setARB/NecromancersCovenant");

class NecromancersCovenant extends NecromancersCovenantBase {
  constructor(game) {
    super(game, "Necromancer's Covenant", "Commander 2015", "C15");
  }
}

module.exports = NecromancersCovenant;
