"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindsofRath extends Card {
  constructor(game) {
    super(game, "Winds of Rath", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = WindsofRath;
