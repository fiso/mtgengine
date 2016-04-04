"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Damnation extends Card {
  constructor(game) {
    super(game, "Damnation", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Damnation;
