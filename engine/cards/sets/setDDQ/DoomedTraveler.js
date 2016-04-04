"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoomedTraveler extends Card {
  constructor(game) {
    super(game, "Doomed Traveler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DoomedTraveler;
