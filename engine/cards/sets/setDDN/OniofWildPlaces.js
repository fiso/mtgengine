"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OniofWildPlaces extends Card {
  constructor(game) {
    super(game, "Oni of Wild Places", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OniofWildPlaces;
