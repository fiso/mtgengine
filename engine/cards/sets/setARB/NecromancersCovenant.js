"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromancersCovenant extends UnimplementedCard {
  constructor(game) {
    super(game, "Necromancer's Covenant", "Alara Reborn", "ARB");
  }
}

module.exports = NecromancersCovenant;
