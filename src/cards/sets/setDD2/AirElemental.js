"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = AirElemental;
