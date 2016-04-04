"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorillaWarrior extends Card {
  constructor(game) {
    super(game, "Gorilla Warrior", "Battle Royale Box Set", "BRB");
  }
}

module.exports = GorillaWarrior;
