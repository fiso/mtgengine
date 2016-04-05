"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragon Blood", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DragonBlood;
