"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorehornMinotaurs extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorehorn Minotaurs", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GorehornMinotaurs;
