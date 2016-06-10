"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = AirElemental;
