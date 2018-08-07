"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setM19/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = AirElemental;
