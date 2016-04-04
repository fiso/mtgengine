"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSecretAgent extends Card {
  constructor(game) {
    super(game, "Goblin Secret Agent", "Unhinged", "UNH");
  }
}

module.exports = GoblinSecretAgent;
