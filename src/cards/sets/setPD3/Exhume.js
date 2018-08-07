"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exhume extends UnimplementedCard {
  constructor (game) {
    super(game, "Exhume", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Exhume;
