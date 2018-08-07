"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JakubŠlemrDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Jakub Šlemr Decklist", "World Championship Decks 1997", "WC97");
  }
}

module.exports = JakubŠlemrDecklist;
