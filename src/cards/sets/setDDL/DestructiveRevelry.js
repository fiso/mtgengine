"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructiveRevelry extends UnimplementedCard {
  constructor(game) {
    super(game, "Destructive Revelry", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DestructiveRevelry;
