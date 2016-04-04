"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnaxandCymede extends Card {
  constructor(game) {
    super(game, "Anax and Cymede", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = AnaxandCymede;
