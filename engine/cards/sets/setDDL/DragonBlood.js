"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonBlood extends Card {
  constructor(game) {
    super(game, "Dragon Blood", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DragonBlood;
