"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleSquadron extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle Squadron", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = BattleSquadron;
