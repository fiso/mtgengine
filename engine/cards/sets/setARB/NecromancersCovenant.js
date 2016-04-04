"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecromancersCovenant extends Card {
  constructor(game) {
    super(game, "Necromancer's Covenant", "Alara Reborn", "ARB");
  }
}

module.exports = NecromancersCovenant;
