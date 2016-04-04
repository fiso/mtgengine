"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PreyUpon extends Card {
  constructor(game) {
    super(game, "Prey Upon", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = PreyUpon;
