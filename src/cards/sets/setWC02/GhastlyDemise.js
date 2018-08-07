"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhastlyDemise extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghastly Demise", "World Championship Decks 2002", "WC02");
  }
}

module.exports = GhastlyDemise;
