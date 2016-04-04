"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhalanxLeader extends Card {
  constructor(game) {
    super(game, "Phalanx Leader", "Magic Game Day", "pMGD");
  }
}

module.exports = PhalanxLeader;
