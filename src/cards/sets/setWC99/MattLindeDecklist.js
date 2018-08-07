"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MattLindeDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Matt Linde Decklist", "World Championship Decks 1999", "WC99");
  }
}

module.exports = MattLindeDecklist;
