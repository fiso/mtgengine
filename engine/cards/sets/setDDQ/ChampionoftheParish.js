"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionoftheParish extends Card {
  constructor(game) {
    super(game, "Champion of the Parish", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ChampionoftheParish;
