"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeusofCalamity extends Card {
  constructor(game) {
    super(game, "Deus of Calamity", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DeusofCalamity;
