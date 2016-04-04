"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazingArchon extends Card {
  constructor(game) {
    super(game, "Blazing Archon", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = BlazingArchon;
