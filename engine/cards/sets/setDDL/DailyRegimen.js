"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DailyRegimen extends Card {
  constructor(game) {
    super(game, "Daily Regimen", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DailyRegimen;
