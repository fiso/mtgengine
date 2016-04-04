"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrSuperion extends Card {
  constructor(game) {
    super(game, "Myr Superion", "Magic Game Day", "pMGD");
  }
}

module.exports = MyrSuperion;
