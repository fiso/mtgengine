"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlexBortehDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Alex Borteh Decklist", "World Championship Decks 2001", "WC01");
  }
}

module.exports = AlexBortehDecklist;
