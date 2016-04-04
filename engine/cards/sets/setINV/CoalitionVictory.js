"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoalitionVictory extends Card {
  constructor(game) {
    super(game, "Coalition Victory", "Invasion", "INV");
  }
}

module.exports = CoalitionVictory;
