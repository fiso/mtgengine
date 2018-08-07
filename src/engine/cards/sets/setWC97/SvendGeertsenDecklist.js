"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SvendGeertsenDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Svend Geertsen Decklist", "World Championship Decks 1997", "WC97");
  }
}

module.exports = SvendGeertsenDecklist;
