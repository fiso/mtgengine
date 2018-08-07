"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AntoineRuelDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Antoine Ruel Decklist", "World Championship Decks 2001", "WC01");
  }
}

module.exports = AntoineRuelDecklist;
