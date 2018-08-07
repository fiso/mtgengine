"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkLePineDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark Le Pine Decklist", "World Championship Decks 1999", "WC99");
  }
}

module.exports = MarkLePineDecklist;
