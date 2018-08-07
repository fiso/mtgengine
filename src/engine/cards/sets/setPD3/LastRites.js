"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastRites extends UnimplementedCard {
  constructor (game) {
    super(game, "Last Rites", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = LastRites;
