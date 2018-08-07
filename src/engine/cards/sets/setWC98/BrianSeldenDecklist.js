"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrianSeldenDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Brian Selden Decklist", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BrianSeldenDecklist;
