"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FacelessButcher extends Card {
  constructor(game) {
    super(game, "Faceless Butcher", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = FacelessButcher;
