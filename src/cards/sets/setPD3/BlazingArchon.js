"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingArchon extends UnimplementedCard {
  constructor (game) {
    super(game, "Blazing Archon", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = BlazingArchon;
