"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PutridImp extends Card {
  constructor(game) {
    super(game, "Putrid Imp", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = PutridImp;
