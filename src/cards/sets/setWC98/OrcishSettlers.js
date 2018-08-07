"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishSettlers extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Settlers", "World Championship Decks 1998", "WC98");
  }
}

module.exports = OrcishSettlers;
