"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recollect extends Card {
  constructor(game) {
    super(game, "Recollect", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Recollect;
