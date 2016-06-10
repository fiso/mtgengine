"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FacelessButcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Faceless Butcher", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = FacelessButcher;
