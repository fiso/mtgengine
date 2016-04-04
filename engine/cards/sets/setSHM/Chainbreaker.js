"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chainbreaker extends Card {
  constructor(game) {
    super(game, "Chainbreaker", "Shadowmoor", "SHM");
  }
}

module.exports = Chainbreaker;
