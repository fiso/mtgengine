"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecromancersCovenantBase = require("../setARB/NecromancersCovenant.js");

class NecromancersCovenant extends NecromancersCovenantBase {
  constructor(game) {
    super(game, "Necromancer's Covenant", "Commander 2015", "C15");
  }
}

module.exports = NecromancersCovenant;
