"use strict";
const Constants = require ("../../../Constants");
const DoomedTravelerBase = require("../setDDQ/DoomedTraveler");

class DoomedTraveler extends DoomedTravelerBase {
  constructor (game) {
    super(game, "Doomed Traveler", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DoomedTraveler;
