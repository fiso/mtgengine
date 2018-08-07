"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonStronghold extends UnimplementedCard {
  constructor (game) {
    super(game, "Ebon Stronghold", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = EbonStronghold;
