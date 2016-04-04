"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tidings extends Card {
  constructor(game) {
    super(game, "Tidings", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Tidings;
