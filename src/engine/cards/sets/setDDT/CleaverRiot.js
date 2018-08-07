"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleaverRiot extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleaver Riot", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = CleaverRiot;
