"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PincherBeetles extends Card {
  constructor(game) {
    super(game, "Pincher Beetles", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PincherBeetles;
