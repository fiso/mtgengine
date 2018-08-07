"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplorersScope extends UnimplementedCard {
  constructor (game) {
    super(game, "Explorer's Scope", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ExplorersScope;
