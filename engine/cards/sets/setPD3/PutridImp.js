"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PutridImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Putrid Imp", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = PutridImp;
