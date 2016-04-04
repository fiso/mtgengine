"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DestructiveRevelry extends Card {
  constructor(game) {
    super(game, "Destructive Revelry", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DestructiveRevelry;
