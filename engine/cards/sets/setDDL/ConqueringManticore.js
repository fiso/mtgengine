"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConqueringManticore extends Card {
  constructor(game) {
    super(game, "Conquering Manticore", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ConqueringManticore;
