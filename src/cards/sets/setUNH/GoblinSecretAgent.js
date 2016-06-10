"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSecretAgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Secret Agent", "Unhinged", "UNH");
  }
}

module.exports = GoblinSecretAgent;
