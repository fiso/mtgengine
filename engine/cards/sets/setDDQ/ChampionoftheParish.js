"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionoftheParish extends UnimplementedCard {
  constructor(game) {
    super(game, "Champion of the Parish", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ChampionoftheParish;
