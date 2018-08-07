"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glory extends UnimplementedCard {
  constructor (game) {
    super(game, "Glory", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Glory;
