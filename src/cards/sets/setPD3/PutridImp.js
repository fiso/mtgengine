"use strict";
const Constants = require ("../../../Constants");
const PutridImpBase = require("../setVMA/PutridImp");

class PutridImp extends PutridImpBase {
  constructor (game) {
    super(game, "Putrid Imp", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = PutridImp;
