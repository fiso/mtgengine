"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DailyRegimen extends UnimplementedCard {
  constructor (game) {
    super(game, "Daily Regimen", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DailyRegimen;
