"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Horror", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = HiddenHorror;
