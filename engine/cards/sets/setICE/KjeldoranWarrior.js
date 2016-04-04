"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranWarrior extends Card {
  constructor(game) {
    super(game, "Kjeldoran Warrior", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranWarrior;
