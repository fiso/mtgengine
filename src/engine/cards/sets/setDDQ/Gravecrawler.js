"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravecrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Gravecrawler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Gravecrawler;
