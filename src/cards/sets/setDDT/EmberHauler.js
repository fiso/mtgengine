"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberHauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Hauler", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = EmberHauler;
