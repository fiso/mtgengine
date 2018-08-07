"use strict";
const Constants = require ("../../../Constants");
const EntombBase = require("../setMP2/Entomb");

class Entomb extends EntombBase {
  constructor (game) {
    super(game, "Entomb", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Entomb;
