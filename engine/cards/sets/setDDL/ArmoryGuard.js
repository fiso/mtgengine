"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoryGuard extends Card {
  constructor(game) {
    super(game, "Armory Guard", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ArmoryGuard;
