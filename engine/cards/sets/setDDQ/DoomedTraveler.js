"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomedTraveler extends UnimplementedCard {
  constructor(game) {
    super(game, "Doomed Traveler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DoomedTraveler;
