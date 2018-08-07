"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Compost extends UnimplementedCard {
  constructor (game) {
    super(game, "Compost", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Compost;
