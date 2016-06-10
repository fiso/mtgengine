"use strict";
const Constants = require ("../../../Constants");
const VineTrellisBase = require("../setDD3_GVL/VineTrellis");

class VineTrellis extends VineTrellisBase {
  constructor (game) {
    super(game, "Vine Trellis", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = VineTrellis;
