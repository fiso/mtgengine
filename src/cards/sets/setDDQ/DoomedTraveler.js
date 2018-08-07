"use strict";
const Constants = require ("../../../Constants");
const DoomedTravelerBase = require("../setBBD/DoomedTraveler");

class DoomedTraveler extends DoomedTravelerBase {
  constructor (game) {
    super(game, "Doomed Traveler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DoomedTraveler;
