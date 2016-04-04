"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Psychatog extends Card {
  constructor(game) {
    super(game, "Psychatog", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Psychatog;
