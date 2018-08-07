"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaphaelLevyDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Raphael Levy Decklist", "World Championship Decks 2002", "WC02");
  }
}

module.exports = RaphaelLevyDecklist;
